// Token reference: reads tokens/tokens.json, so it always matches the code.
import React from 'react';
import tokens from '../../tokens/tokens.json';

export default { title: 'Foundations/Tokens', parameters: { layout: 'padded' } };

const label = { fontSize: 12, lineHeight: '16px', color: 'var(--text-secondary)' };
const code = { fontFamily: 'var(--font-mono)', fontSize: 12 };
const isPrim = (n) => /^(indigo|gray|green|amber|red)-\d+$|^white$|^black$/.test(n);

export const Colors = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {['bg-', 'text-', 'border-', 'icon-'].map((p) => (
        <section key={p}>
          <h3 className="heading-h4" style={{ margin: '0 0 12px' }}>{p.replace('-', '')}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12 }}>
            {tokens.color.tokens.filter((t) => t.name.startsWith(p) && !isPrim(t.name)).map((t) => (
              <div key={t.name} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ height: 48, borderRadius: 4, border: '1px solid var(--border-default)', background: `var(--${t.name})` }} />
                <code style={code}>var(--{t.name})</code>
                <span style={label}>{t.usage}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};

export const Typography = {
  render: () => (
    <div>
      {tokens.type.groups.flatMap((g) => g.styles).map((s) => (
        <div key={s.name} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 16, alignItems: 'baseline', padding: '12px 0', borderBottom: '1px solid var(--border-default)' }}>
          <div><code style={code}>.{s.name}</code><div style={label}>{s.fontSize} / {s.lineHeight} · {s.fontWeight}</div></div>
          <div className={s.name}>How can I help you today?</div>
        </div>
      ))}
    </div>
  ),
};

export const Spacing = {
  render: () => (
    <div>
      {tokens.spacing.tokens.map((t) => (
        <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '180px 1fr 60px', gap: 16, alignItems: 'center', padding: '6px 0' }}>
          <code style={code}>var(--{t.name})</code>
          <span style={{ height: 16, width: t.value, minWidth: 1, background: 'var(--bg-brand)', borderRadius: 2 }} />
          <span style={label}>{t.value}</span>
        </div>
      ))}
    </div>
  ),
};

export const RadiusAndShadows = {
  name: 'Radius & shadows',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {tokens.radius.tokens.map((t) => (
          <div key={t.name} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ width: 80, height: 80, background: 'var(--bg-brand-subtle)', border: '1.5px solid var(--border-brand)', borderRadius: t.value }} />
            <code style={code}>{t.name}</code><span style={label}>{t.value}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', padding: 24, background: 'var(--bg-subtle)', borderRadius: 8 }}>
        {tokens.shadow.tokens.map((t) => (
          <div key={t.name} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ width: 120, height: 72, background: 'var(--bg-default)', borderRadius: 4, boxShadow: `var(--${t.name})` }} />
            <code style={code}>{t.name}</code>
          </div>
        ))}
      </div>
    </div>
  ),
};
