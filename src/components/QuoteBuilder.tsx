import { useEffect, useMemo, useState } from 'react';
import {
  CalendarDays,
  Check,
  ClipboardList,
  MapPin,
  MessageCircle,
  Minus,
  Plus,
  Printer,
  RotateCcw,
  Users,
} from 'lucide-react';

type Product = {
  id: string;
  name: string;
  unit: string;
  price: number;
  minQuantity: number;
  maxQuantity: number;
  available: boolean;
};

type QuoteDraft = {
  customerName: string;
  eventDate: string;
  people: string;
  eventType: string;
  fulfillment: string;
  neighborhood: string;
  notes: string;
  quantities: Record<string, number>;
};

interface Props {
  products: Product[];
  whatsappNumber: string;
}

const STORAGE_KEY = 'versao-vegana-pre-orcamento-v1';
const emptyDraft: QuoteDraft = {
  customerName: '',
  eventDate: '',
  people: '',
  eventType: 'Evento ou encomenda',
  fulfillment: 'Retirada',
  neighborhood: '',
  notes: '',
  quantities: {},
};

const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const formatDate = (value: Date) => value.toLocaleDateString('pt-BR');

export default function QuoteBuilder({ products, whatsappNumber }: Props) {
  const [draft, setDraft] = useState<QuoteDraft>(emptyDraft);
  const [ready, setReady] = useState(false);
  const [reference, setReference] = useState('VV-PRÉVIA');
  const [issuedAt, setIssuedAt] = useState('');
  const [validUntil, setValidUntil] = useState('');

  useEffect(() => {
    const now = new Date();
    const validity = new Date(now);
    validity.setDate(validity.getDate() + 5);
    setIssuedAt(formatDate(now));
    setValidUntil(formatDate(validity));
    setReference(`VV-${now.toISOString().slice(0, 10).replaceAll('-', '')}-${String(now.getTime()).slice(-4)}`);

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setDraft({ ...emptyDraft, ...JSON.parse(stored) });
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  }, [draft, ready]);

  const selectedItems = useMemo(
    () =>
      products
        .map((product) => ({ ...product, quantity: draft.quantities[product.id] || 0 }))
        .filter((product) => product.quantity > 0),
    [draft.quantities, products],
  );

  const total = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const requiredFieldsComplete = draft.customerName.trim().length >= 3 && selectedItems.length > 0;

  const setField = (field: keyof QuoteDraft, value: string) => {
    setDraft((current) => ({ ...current, [field]: value }));
  };

  const setQuantity = (product: Product, nextValue: number) => {
    const requested = Math.floor(nextValue || 0);
    const normalized =
      requested <= 0 ? 0 : Math.max(product.minQuantity, Math.min(product.maxQuantity, requested));
    setDraft((current) => ({
      ...current,
      quantities: { ...current.quantities, [product.id]: normalized },
    }));
  };

  const clearDraft = () => {
    setDraft(emptyDraft);
    localStorage.removeItem(STORAGE_KEY);
  };

  const whatsappMessage = encodeURIComponent(
    [
      'Oi, Versão Vegana! Gostaria de confirmar esta prévia de orçamento:',
      `Referência: ${reference}`,
      `Cliente: ${draft.customerName || 'Não informado'}`,
      `Tipo: ${draft.eventType}`,
      draft.eventDate ? `Data pretendida: ${draft.eventDate.split('-').reverse().join('/')}` : '',
      draft.people ? `Pessoas/porções: ${draft.people}` : '',
      `Atendimento: ${draft.fulfillment}`,
      draft.neighborhood ? `Bairro/região: ${draft.neighborhood}` : '',
      '',
      'Itens:',
      ...selectedItems.map(
        (item) => `- ${item.quantity}x ${item.name}: ${formatCurrency(item.price * item.quantity)}`,
      ),
      '',
      `Total estimado: ${formatCurrency(total)}`,
      `Validade da prévia: ${validUntil}`,
      draft.notes ? `Observações: ${draft.notes}` : '',
      '',
      'Entendo que o valor e a disponibilidade precisam ser confirmados pela equipe.',
    ]
      .filter(Boolean)
      .join('\n'),
  );

  return (
    <div className="quote-experience">
      <section className="quote-form" aria-labelledby="quote-form-title">
        <div className="quote-section-heading">
          <div>
            <span>Etapa 1</span>
            <h2 id="quote-form-title">Conte sobre o pedido</h2>
          </div>
          <button className="text-button no-print" type="button" onClick={clearDraft}>
            <RotateCcw size={17} aria-hidden="true" />
            Limpar rascunho
          </button>
        </div>

        <div className="field-grid">
          <label className="field">
            Nome
            <input
              value={draft.customerName}
              onChange={(event) => setField('customerName', event.target.value.slice(0, 80))}
              placeholder="Como podemos chamar você?"
              autoComplete="name"
              required
            />
          </label>
          <label className="field">
            Data pretendida
            <input
              type="date"
              value={draft.eventDate}
              min={new Date().toISOString().slice(0, 10)}
              onChange={(event) => setField('eventDate', event.target.value)}
            />
          </label>
          <label className="field">
            Pessoas ou porções
            <span className="input-with-icon">
              <Users size={18} aria-hidden="true" />
              <input
                inputMode="numeric"
                value={draft.people}
                onChange={(event) => setField('people', event.target.value.replace(/\D/g, '').slice(0, 4))}
                placeholder="Ex.: 30"
              />
            </span>
          </label>
          <label className="field">
            Tipo de pedido
            <select value={draft.eventType} onChange={(event) => setField('eventType', event.target.value)}>
              <option>Evento ou encomenda</option>
              <option>Buffet</option>
              <option>Feira</option>
              <option>Congelados</option>
              <option>Pedido para o dia</option>
            </select>
          </label>
          <fieldset className="field choice-field">
            <legend>Como deseja receber?</legend>
            <div className="segmented-control">
              {['Retirada', 'Entrega'].map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name="fulfillment"
                    value={option}
                    checked={draft.fulfillment === option}
                    onChange={(event) => setField('fulfillment', event.target.value)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="field">
            Bairro ou região
            <span className="input-with-icon">
              <MapPin size={18} aria-hidden="true" />
              <input
                value={draft.neighborhood}
                onChange={(event) => setField('neighborhood', event.target.value.slice(0, 80))}
                placeholder={draft.fulfillment === 'Entrega' ? 'Onde será a entrega?' : 'Opcional'}
              />
            </span>
          </label>
        </div>

        <div className="quote-section-heading products-heading">
          <div>
            <span>Etapa 2</span>
            <h2>Escolha os itens</h2>
          </div>
          <p>Valores estimados. A apresentação e a disponibilidade podem variar.</p>
        </div>

        <div className="quote-product-list">
          {products.map((product) => {
            const quantity = draft.quantities[product.id] || 0;
            return (
              <article className={`quote-product ${!product.available ? 'is-unavailable' : ''}`} key={product.id}>
                <div>
                  <h3>{product.name}</h3>
                  <p>
                    {formatCurrency(product.price)} por {product.unit}
                  </p>
                  <small>
                    {product.available
                      ? `De ${product.minQuantity} a ${product.maxQuantity} ${product.unit}(s)`
                      : 'Indisponível no momento'}
                  </small>
                </div>
                <div className="quantity-control">
                  <button
                    type="button"
                    disabled={!product.available || quantity === 0}
                    onClick={() => setQuantity(product, quantity - 1)}
                    aria-label={`Diminuir quantidade de ${product.name}`}
                  >
                    <Minus size={18} aria-hidden="true" />
                  </button>
                  <input
                    value={quantity}
                    inputMode="numeric"
                    disabled={!product.available}
                    aria-label={`Quantidade de ${product.name}`}
                    onChange={(event) =>
                      setQuantity(product, Number(event.target.value.replace(/\D/g, '')) || 0)
                    }
                  />
                  <button
                    type="button"
                    disabled={!product.available || quantity >= product.maxQuantity}
                    onClick={() =>
                      setQuantity(product, quantity === 0 ? product.minQuantity : quantity + 1)
                    }
                    aria-label={`Aumentar quantidade de ${product.name}`}
                  >
                    <Plus size={18} aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <label className="field full-field">
          Observações
          <textarea
            value={draft.notes}
            onChange={(event) => setField('notes', event.target.value.slice(0, 500))}
            placeholder="Restrições alimentares, horário, formato do evento ou outras informações importantes"
            maxLength={500}
          />
          <small>{draft.notes.length}/500 caracteres</small>
        </label>
      </section>

      <aside className="quote-summary" aria-labelledby="quote-summary-title">
        <div className="summary-icon"><ClipboardList size={24} aria-hidden="true" /></div>
        <span className="summary-kicker">Pré-orçamento</span>
        <h2 id="quote-summary-title">{reference}</h2>
        <dl className="quote-meta">
          <div>
            <dt><CalendarDays size={16} aria-hidden="true" /> Emitido</dt>
            <dd>{issuedAt || 'Hoje'}</dd>
          </div>
          <div>
            <dt><Check size={16} aria-hidden="true" /> Válido até</dt>
            <dd>{validUntil || '5 dias'}</dd>
          </div>
        </dl>

        {selectedItems.length === 0 ? (
          <div className="empty-summary">
            <p>Adicione itens para visualizar a composição e o valor estimado.</p>
          </div>
        ) : (
          <ul>
            {selectedItems.map((item) => (
              <li key={item.id}>
                <span>{item.quantity}x {item.name}</span>
                <strong>{formatCurrency(item.price * item.quantity)}</strong>
              </li>
            ))}
          </ul>
        )}

        <div className="quote-total">
          <span>Total estimado</span>
          <strong>{formatCurrency(total)}</strong>
        </div>
        <p className="summary-disclaimer">
          Sujeito à confirmação de disponibilidade, prazo, entrega e ajustes de produção.
        </p>

        <div className="summary-actions no-print">
          <a
            className={`button button-primary ${!requiredFieldsComplete ? 'is-disabled' : ''}`}
            href={requiredFieldsComplete ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}` : undefined}
            target="_blank"
            rel="noreferrer"
            aria-disabled={!requiredFieldsComplete}
          >
            <MessageCircle size={19} aria-hidden="true" />
            Confirmar no WhatsApp
          </a>
          <button className="button button-outline" type="button" onClick={() => window.print()}>
            <Printer size={18} aria-hidden="true" />
            Imprimir ou salvar PDF
          </button>
        </div>
        {!requiredFieldsComplete && (
          <p className="summary-helper no-print">Informe seu nome e adicione pelo menos um item.</p>
        )}
      </aside>
    </div>
  );
}
