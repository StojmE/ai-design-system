/* AI Design System components (React 18). Styles: src/styles/components.css. Tokens: src/tokens/tokens.css. */
import React from 'react';

const h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }

  var PATHS = {
    plus: ['M8 3v10M3 8h10'],
    check: ['M3.5 8.5l3 3 6-7'],
    search: ['M10.5 10.5L13.5 13.5', 'c:7:7:4.5'],
    'chevron-down': ['M4 6l4 4 4-4'],
    close: ['M4 4l8 8M12 4l-8 8'],
    'arrow-right': ['M3 8h10M9 4l4 4-4 4'],
    sparkle: ['M8 2l1.4 4.6L14 8l-4.6 1.4L8 14l-1.4-4.6L2 8l4.6-1.4z'],
    copy: ['M5.5 5.5h7v7h-7z', 'M3.5 10.5v-7h7'],
    refresh: ['M13 8a5 5 0 1 1-1.5-3.5', 'M13 2.5v3h-3'],
    'thumbs-up': ['M5 7.5v5.5H2.5V7.5z', 'M5 7.5l2.8-4.5c.9 0 1.6.7 1.6 1.6v1.9h2.9a1 1 0 0 1 1 1.2l-.9 4.5a1 1 0 0 1-1 .8H5'],
    'thumbs-down': ['M5 8.5V3H2.5v5.5z', 'M5 8.5l2.8 4.5c.9 0 1.6-.7 1.6-1.6V9.5h2.9a1 1 0 0 0 1-1.2l-.9-4.5a1 1 0 0 0-1-.8H5'],
    info: ['c:8:8:6', 'M8 7.5v3.5', 'M8 5h.01'],
    warning: ['M8 2.5l6 10.5H2z', 'M8 6.5v3', 'M8 11.5h.01'],
    paperclip: ['M13 7.5l-5 5a3 3 0 0 1-4.2-4.2l5.3-5.3a2 2 0 0 1 2.8 2.8L6.6 11a1 1 0 0 1-1.4-1.4L10 4.8'],
    stop: ['M4.5 4.5h7v7h-7z'],
    file: ['M4 2h5l3 3v9H4z', 'M9 2v3h3'],
    upload: ['M8 10V3', 'M5 6l3-3 3 3', 'M3 11v2h10v-2'],
    'chevron-right': ['M6 4l4 4-4 4'],
    'chevron-left': ['M10 4l-4 4 4 4'],
    'external-link': ['M9 3h4v4', 'M13 3L7 9', 'M11 9.5V13H3V5h3.5'],
    message: ['M3 3.5h10v7H7l-3 2.5v-2.5H3z'],
    folder: ['M2 4.5h4l1.5 1.5H14v6.5H2z'],
    settings: ['M3 5h3M9 5h4M3 11h7M13 11h0', 'c:7.5:5:1.5', 'c:11.5:11:1.5'],
    trash: ['M3 4.5h10', 'M6 4.5V3h4v1.5', 'M4.5 4.5l.6 8.5h5.8l.6-8.5'],
    more: ['c:3.5:8:.75', 'c:8:8:.75', 'c:12.5:8:.75'],
    lightbulb: ['M6.2 12.5h3.6', 'M6.8 14.2h2.4', 'M8 2a4 4 0 0 0-2.4 7.2c.4.3.6.8.6 1.3h3.6c0-.5.2-1 .6-1.3A4 4 0 0 0 8 2z'],
    home: ['M2.5 7.5L8 3l5.5 4.5', 'M4 6.5V13h8V6.5'],
    'arrow-left': ['M13 8H3', 'M7 4L3 8l4 4'],
    menu: ['M2.5 4.5h11', 'M2.5 8h11', 'M2.5 11.5h11'],
    mic: ['M6 3.5a2 2 0 0 1 4 0V8a2 2 0 0 1-4 0z', 'M3.5 7.5a4.5 4.5 0 0 0 9 0', 'M8 12v2'],
    edit: ['M10.5 3l2.5 2.5L6 12.5H3.5V10z', 'M9 4.5L11.5 7'],
    archive: ['M2.5 3h11v3h-11z', 'M3.5 6v7h9V6', 'M6.5 8.5h3'],
    user: ['c:8:5.5:2.5', 'M3 13.5a5 5 0 0 1 10 0'],
    bell: ['M4 11V7a4 4 0 0 1 8 0v4l1 1.5H3z', 'M6.5 14h3'],
    share: ['M8 2.5v8', 'M5 5.5l3-3 3 3', 'M3.5 9v4.5h9V9'],
    image: ['M2.5 3h11v10h-11z', 'c:6:6.5:1.25', 'M13.5 10.5l-3.5-3.5-6 6']
  };

  function Icon(props) {
    var name = props.name || 'sparkle', size = props.size || 16, sw = props.strokeWidth || 1.5;
    var parts = (PATHS[name] || PATHS.sparkle).map(function (d, i) {
      if (d.indexOf('c:') === 0) { var c = d.split(':'); return h('circle', { key: i, cx: +c[1], cy: +c[2], r: +c[3] }); }
      return h('path', { key: i, d: d });
    });
    return h('svg', { className: cx('ai-icon', props.className), width: size, height: size, viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': props.label ? undefined : true, role: props.label ? 'img' : undefined, 'aria-label': props.label }, parts);
  }

  function Button(props) {
    var variant = props.variant || 'primary', size = props.size || 'medium';
    var rest = Object.assign({}, props);
    ['variant', 'size', 'icon', 'block', 'state', 'children', 'className'].forEach(function (k) { delete rest[k]; });
    return h('button', Object.assign({ type: 'button' }, rest, {
      className: cx('ai-btn', 'ai-btn-' + variant, size === 'small' && 'ai-btn-small', props.block && 'ai-btn-block', props.state === 'hover' && 'is-hover', props.state === 'focus' && 'is-focus', props.state === 'active' && 'is-active', props.className)
    }), props.icon ? h(Icon, { name: props.icon }) : null, props.children);
  }

  function Field(props, control) {
    return h('label', { className: cx('ai-field', props.error && 'is-error', props.disabled && 'is-disabled', props.className), style: props.style },
      props.label ? h('span', { className: 'ai-field-label' }, props.label) : null,
      control,
      (props.error || props.helper) ? h('span', { className: 'ai-field-helper' }, props.error || props.helper) : null);
  }

  function Input(props) {
    var rest = Object.assign({}, props);
    ['label', 'helper', 'error', 'icon', 'state', 'className', 'style'].forEach(function (k) { delete rest[k]; });
    return Field(props, h('span', { className: cx('ai-control', props.state === 'focus' && 'is-focus', props.state === 'hover' && 'is-hover') },
      props.icon ? h(Icon, { name: props.icon }) : null,
      h('input', Object.assign({ type: 'text' }, rest))));
  }

  function Select(props) {
    var has = props.value != null && props.value !== '';
    return Field(props, h('span', { className: cx('ai-control', 'ai-select', props.open && 'is-open is-focus', props.state === 'focus' && 'is-focus', props.state === 'hover' && 'is-hover', !has && 'is-placeholder'), role: 'combobox', 'aria-expanded': !!props.open, tabIndex: props.disabled ? -1 : 0, onClick: props.onClick },
      h('span', { className: 'ai-select-value' }, has ? props.value : (props.placeholder || 'Select an option')),
      h(Icon, { name: 'chevron-down' })));
  }

  function useControlled(value, initial, onChange) {
    var s = React.useState(!!initial);
    var on = value != null ? !!value : s[0];
    return [on, function () { var next = !on; if (value == null) s[1](next); if (onChange) onChange(next); }];
  }

  function Checkbox(props) {
    var st = useControlled(props.checked, props.defaultChecked, props.onChange);
    var box = h('label', { className: cx('ai-check', st[0] && 'is-checked', props.disabled && 'is-disabled', props.error && 'is-error', props.state === 'focus' && 'is-focus', props.state === 'hover' && 'is-hover') },
      h('input', { type: 'checkbox', checked: st[0], disabled: props.disabled, onChange: st[1], 'aria-invalid': props.error ? true : undefined }),
      h('span', { className: 'ai-check-box' }, st[0] ? h(Icon, { name: 'check', size: 12, strokeWidth: 2 }) : null),
      props.children != null ? h('span', null, props.children) : (props.label ? h('span', null, props.label) : null));
    return typeof props.error === 'string' ? h('span', { className: 'ai-choice-wrap' }, box, h('span', { className: 'ai-field-helper ai-error-text' }, props.error)) : box;
  }

  function Toggle(props) {
    var st = useControlled(props.on, props.defaultOn, props.onChange);
    return h('label', { className: cx('ai-toggle', st[0] && 'is-on', props.disabled && 'is-disabled', props.state === 'focus' && 'is-focus', props.state === 'hover' && 'is-hover') },
      h('input', { type: 'checkbox', role: 'switch', checked: st[0], disabled: props.disabled, onChange: st[1] }),
      h('span', { className: 'ai-toggle-track' }, h('span', { className: 'ai-toggle-knob' })),
      props.children != null ? h('span', null, props.children) : (props.label ? h('span', null, props.label) : null));
  }

  function Badge(props) {
    return h('span', { className: cx('ai-badge', 'ai-badge-' + (props.tone || 'neutral'), props.className) }, props.children);
  }

  function Avatar(props) {
    var type = props.type || 'user', small = props.size === 'small';
    return h('span', { className: cx('ai-avatar', 'ai-avatar-' + type, small && 'ai-avatar-small'), 'aria-label': props.label || (type === 'ai' ? 'Assistant' : props.initials) },
      type === 'ai' ? h(Icon, { name: 'sparkle', size: small ? 14 : 18 }) : (props.initials || 'ES'));
  }

  function ChatMessage(props) {
    var sender = props.sender || 'ai';
    var name = props.name != null ? props.name : (sender === 'ai' ? 'Assistant' : 'You');
    return h('div', { className: cx('ai-msg', 'ai-msg-' + sender) },
      props.showAvatar === false ? null : h(Avatar, { type: sender === 'ai' ? 'ai' : 'user', initials: props.initials }),
      h('div', { className: 'ai-msg-body' },
        props.showName === false ? null : h('span', { className: 'ai-msg-name' }, name),
        h('div', { className: 'ai-msg-bubble' }, props.children),
        props.attachment ? h('div', { className: 'ai-msg-attach' }, props.attachment) : null));
  }

  function Card(props) {
    return h(props.onClick || props.interactive ? 'button' : 'div', { type: props.onClick || props.interactive ? 'button' : undefined, onClick: props.onClick, className: cx('ai-card', props.variant === 'elevated' && 'ai-card-elevated', (props.onClick || props.interactive) && 'is-interactive', props.state === 'hover' && 'is-hover', props.state === 'focus' && 'is-focus', props.selected && 'is-selected', props.className), style: props.style },
      props.badge ? h(Badge, { tone: props.badgeTone || 'brand' }, props.badge) : null,
      h('div', { className: 'ai-card-text' },
        props.title ? h('h3', { className: 'ai-card-title' }, props.title) : null,
        props.description ? h('p', { className: 'ai-card-desc' }, props.description) : null),
      props.children,
      props.actions ? h('div', { className: 'ai-card-actions' }, props.actions) : null);
  }

  function Menu(props) {
    return h('div', { className: cx('ai-menu', props.className), role: 'menu', style: Object.assign({ width: props.width || 256 }, props.style) }, props.children);
  }

  function MenuItem(props) {
    return h('button', { type: 'button', role: 'menuitem', className: cx('ai-menu-item', props.selected && 'is-selected', props.state === 'hover' && 'is-hover', props.state === 'focus' && 'is-focus'), disabled: props.disabled, onClick: props.onClick },
      props.icon ? h(Icon, { name: props.icon }) : null,
      h('span', null, props.children),
      props.selected ? h(Icon, { name: 'check' }) : null);
  }

  function Tabs(props) {
    var items = props.items || [];
    var s = React.useState(props.defaultValue || items[0]);
    var cur = props.value != null ? props.value : s[0];
    return h('div', { className: cx('ai-tabs', props.className), role: 'tablist', style: props.style },
      items.map(function (it) {
        return h('button', { key: it, type: 'button', role: 'tab', 'aria-selected': it === cur, className: cx('ai-tab', it === cur && 'is-selected', props.hoverValue === it && 'is-hover', props.focusValue === it && 'is-focus'), disabled: (props.disabledItems || []).indexOf(it) >= 0,
          onClick: function () { if (props.value == null) s[1](it); if (props.onChange) props.onChange(it); } }, it);
      }));
  }

  function Modal(props) {
    var box = h('div', { className: 'ai-modal', role: 'dialog', 'aria-modal': !props.inline, 'aria-label': props.title },
      h('div', { className: 'ai-modal-head' },
        h('h2', { className: 'ai-modal-title' }, props.title),
        h('button', { type: 'button', className: 'ai-modal-close', 'aria-label': 'Close', onClick: props.onClose }, h(Icon, { name: 'close' }))),
      typeof props.children === 'string' ? h('p', { className: 'ai-modal-body' }, props.children) : props.children,
      props.footer === false ? null : h('div', { className: 'ai-modal-foot' },
        props.footer || [
          h(Button, { key: 'c', variant: 'secondary', onClick: props.onClose }, props.cancelLabel || 'Cancel'),
          h(Button, { key: 'o', variant: props.destructive ? 'destructive' : 'primary', onClick: props.onConfirm }, props.confirmLabel || (props.destructive ? 'Delete' : 'Save'))
        ]));
    return props.inline ? box : h('div', { className: 'ai-modal-backdrop' }, box);
  }

  function IconButton(props) {
    var rest = Object.assign({}, props);
    ['icon', 'label', 'variant', 'size', 'active', 'state', 'className'].forEach(function (k) { delete rest[k]; });
    return h('button', Object.assign({ type: 'button', 'aria-label': props.label, title: props.label }, rest, {
      className: cx('ai-iconbtn', 'ai-iconbtn-' + (props.variant || 'ghost'), props.size === 'small' && 'ai-iconbtn-small', props.active && 'is-active', props.state === 'hover' && 'is-hover', props.state === 'focus' && 'is-focus', props.className)
    }), h(Icon, { name: props.icon }));
  }

  function Textarea(props) {
    var rest = Object.assign({}, props);
    ['label', 'helper', 'error', 'className', 'style', 'state'].forEach(function (k) { delete rest[k]; });
    return Field(props, h('span', { className: cx('ai-control ai-textarea', props.state === 'focus' && 'is-focus', props.state === 'hover' && 'is-hover') }, h('textarea', Object.assign({ rows: 4 }, rest))));
  }

  function RadioGroup(props) {
    var opts = props.options || [];
    var s = React.useState(props.defaultValue != null ? props.defaultValue : null);
    var cur = props.value != null ? props.value : s[0];
    var name = React.useMemo(function () { return 'ai-radio-' + Math.random().toString(36).slice(2); }, []);
    return h('div', { className: cx('ai-radio-group', props.horizontal && 'is-horizontal', props.error && 'is-error'), role: 'radiogroup', 'aria-label': props.label, 'aria-invalid': props.error ? true : undefined },
      props.label ? h('span', { className: 'ai-field-label' }, props.label) : null,
      opts.map(function (o) {
        var val = typeof o === 'string' ? o : o.value, lab = typeof o === 'string' ? o : o.label, dis = props.disabled || (o && o.disabled);
        return h('label', { key: val, className: cx('ai-radio', cur === val && 'is-checked', dis && 'is-disabled', props.focusValue === val && 'is-focus') },
          h('input', { type: 'radio', name: name, checked: cur === val, disabled: dis, onChange: function () { if (props.value == null) s[1](val); if (props.onChange) props.onChange(val); } }),
          h('span', { className: 'ai-radio-dot' }),
          h('span', null, lab));
      }),
      props.error ? h('span', { className: 'ai-field-helper ai-error-text', role: 'alert' }, props.error) : null);
  }

  function SegmentedControl(props) {
    var items = props.items || [];
    var s = React.useState(props.defaultValue || items[0]);
    var cur = props.value != null ? props.value : s[0];
    return h('div', { className: cx('ai-seg', props.size === 'small' && 'ai-seg-small'), role: 'radiogroup' },
      items.map(function (it) {
        return h('button', { key: it, type: 'button', role: 'radio', 'aria-checked': it === cur, className: cx('ai-seg-item', it === cur && 'is-selected'),
          onClick: function () { if (props.value == null) s[1](it); if (props.onChange) props.onChange(it); } }, it);
      }));
  }

  function TypingIndicator(props) {
    return h('div', { className: 'ai-msg ai-msg-ai', role: 'status', 'aria-label': props.label || 'Assistant is typing' },
      props.showAvatar === false ? null : h(Avatar, { type: 'ai' }),
      h('div', { className: 'ai-msg-body' },
        props.text ? h('span', { className: 'ai-msg-name' }, props.text) : null,
        h('div', { className: 'ai-msg-bubble ai-typing' }, h('i'), h('i'), h('i'))));
  }

  function ResponseActions(props) {
    var s = React.useState(props.feedback || null);
    function fb(v) { var n = s[0] === v ? null : v; s[1](n); if (props.onFeedback) props.onFeedback(n); }
    return h('div', { className: 'ai-resp-actions' },
      h(IconButton, { icon: 'copy', label: 'Copy', size: 'small', onClick: props.onCopy }),
      h(IconButton, { icon: 'refresh', label: 'Regenerate', size: 'small', onClick: props.onRegenerate }),
      h(IconButton, { icon: 'thumbs-up', label: 'Good response', size: 'small', active: s[0] === 'up', onClick: function () { fb('up'); } }),
      h(IconButton, { icon: 'thumbs-down', label: 'Bad response', size: 'small', active: s[0] === 'down', onClick: function () { fb('down'); } }));
  }

  function SuggestionChip(props) {
    return h('button', { type: 'button', className: 'ai-chip', onClick: props.onClick },
      h(Icon, { name: props.icon || 'sparkle' }), h('span', null, props.children));
  }

  function PromptComposer(props) {
    var s = React.useState(props.defaultValue || '');
    var val = props.value != null ? props.value : s[0];
    var gen = !!props.generating;
    return h('div', { className: 'ai-composer-wrap' },
      h('div', { className: 'ai-composer' },
        h('textarea', { rows: props.rows || 2, placeholder: props.placeholder || 'Ask anything…', value: val, 'aria-label': 'Message',
          onChange: function (e) { if (props.value == null) s[1](e.target.value); if (props.onChange) props.onChange(e.target.value); } }),
        h('div', { className: 'ai-composer-bar' },
          h(IconButton, { icon: 'paperclip', label: 'Attach a file', size: 'small' }),
          props.model ? h('button', { type: 'button', className: 'ai-composer-model' }, props.model, h(Icon, { name: 'chevron-down', size: 12 })) : null,
          h('span', { style: { flex: 1 } }),
          gen ? h(IconButton, { icon: 'stop', label: 'Stop generating', variant: 'secondary', onClick: props.onStop })
              : h(IconButton, { icon: 'arrow-right', label: 'Send', variant: 'primary', disabled: !val.trim(), onClick: function () { if (props.onSend) props.onSend(val); } }))),
      props.disclaimer === false ? null : h('p', { className: 'ai-composer-note' }, props.disclaimer || 'AI can make mistakes. Check important info.'));
  }

  function CodeBlock(props) {
    var s = React.useState(false);
    return h('div', { className: 'ai-code' },
      h('div', { className: 'ai-code-head' },
        h('span', null, props.language || 'code'),
        h('button', { type: 'button', className: 'ai-code-copy', onClick: function () {
          try { navigator.clipboard.writeText(props.code || ''); } catch (e) {}
          s[1](true); setTimeout(function () { s[1](false); }, 1500); } },
          h(Icon, { name: s[0] ? 'check' : 'copy', size: 14 }), s[0] ? 'Copied' : 'Copy')),
      h('pre', null, h('code', null, props.code)));
  }

  function Tooltip(props) {
    return h('span', { className: cx('ai-tip-wrap', props.open && 'is-open') }, props.children,
      h('span', { className: cx('ai-tip', 'ai-tip-' + (props.placement || 'top')), role: 'tooltip' }, props.text));
  }

  var TONE_ICON = { info: 'info', success: 'check', warning: 'warning', danger: 'warning' };
  function Alert(props) {
    var tone = props.tone || 'info';
    return h('div', { className: cx('ai-alert', 'ai-alert-' + tone), role: tone === 'danger' ? 'alert' : 'status' },
      h(Icon, { name: TONE_ICON[tone] }),
      h('div', { className: 'ai-alert-text' },
        props.title ? h('strong', null, props.title) : null,
        props.children ? h('span', null, props.children) : null),
      props.onClose ? h('button', { type: 'button', className: 'ai-alert-close', 'aria-label': 'Dismiss', onClick: props.onClose }, h(Icon, { name: 'close' })) : null);
  }

  function Toast(props) {
    var tone = props.tone || 'info';
    return h('div', { className: cx('ai-toast', 'ai-toast-' + tone), role: 'status' },
      h(Icon, { name: TONE_ICON[tone] }),
      h('div', { className: 'ai-toast-text' }, props.title ? h('strong', null, props.title) : null, props.children ? h('span', null, props.children) : null),
      props.action ? h('button', { type: 'button', className: 'ai-toast-action', onClick: props.onAction }, props.action) : null,
      h('button', { type: 'button', className: 'ai-toast-close', 'aria-label': 'Dismiss', onClick: props.onClose }, h(Icon, { name: 'close' })));
  }

  function Spinner(props) {
    var size = props.size === 'small' ? 16 : props.size === 'large' ? 32 : 24;
    return h('span', { className: 'ai-spinner', role: 'status', 'aria-label': props.label || 'Loading', style: { width: size, height: size } });
  }

  function ProgressBar(props) {
    var v = Math.max(0, Math.min(100, props.value || 0));
    return h('div', { className: 'ai-progress' },
      (props.label || props.showValue) ? h('div', { className: 'ai-progress-top' }, h('span', null, props.label), props.showValue ? h('span', null, Math.round(v) + '%') : null) : null,
      h('div', { className: 'ai-progress-track', role: 'progressbar', 'aria-valuenow': v, 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-label': props.label },
        h('div', { className: cx('ai-progress-fill', props.indeterminate && 'is-indeterminate'), style: { width: props.indeterminate ? '40%' : v + '%' } })));
  }

  function Skeleton(props) {
    if (props.lines) {
      return h('div', { className: 'ai-skel-lines', 'aria-hidden': true }, Array.from({ length: props.lines }).map(function (_, i) {
        return h('span', { key: i, className: 'ai-skel', style: { height: 12, width: i === props.lines - 1 ? '60%' : '100%' } });
      }));
    }
    return h('span', { className: 'ai-skel', 'aria-hidden': true, style: { width: props.width || '100%', height: props.height || 16, borderRadius: props.circle ? 'var(--radius-full)' : undefined } });
  }

  function EmptyState(props) {
    return h('div', { className: 'ai-empty' },
      h('span', { className: 'ai-empty-icon' }, h(Icon, { name: props.icon || 'sparkle', size: 24 })),
      h('h3', { className: 'ai-empty-title' }, props.title),
      props.description ? h('p', { className: 'ai-empty-desc' }, props.description) : null,
      props.action ? h('div', { className: 'ai-empty-action' }, props.action) : null);
  }

  function Slider(props) {
    var min = props.min != null ? props.min : 0, max = props.max != null ? props.max : 100, step = props.step || 1;
    var s = React.useState(props.defaultValue != null ? props.defaultValue : min);
    var v = props.value != null ? props.value : s[0];
    var pct = ((v - min) / (max - min)) * 100;
    var fmt = props.format || function (x) { return x; };
    return h('label', { className: cx('ai-slider', props.disabled && 'is-disabled') },
      (props.label || props.showValue !== false) ? h('span', { className: 'ai-slider-top' }, h('span', { className: 'ai-field-label' }, props.label), props.showValue === false ? null : h('span', { className: 'ai-slider-value' }, fmt(v))) : null,
      h('input', { type: 'range', min: min, max: max, step: step, value: v, disabled: props.disabled,
        style: { background: 'linear-gradient(to right, var(--bg-selected) ' + pct + '%, var(--bg-muted) ' + pct + '%)' },
        onChange: function (e) { var n = +e.target.value; if (props.value == null) s[1](n); if (props.onChange) props.onChange(n); } }),
      (props.minLabel || props.maxLabel) ? h('span', { className: 'ai-slider-ends' }, h('span', null, props.minLabel), h('span', null, props.maxLabel)) : null);
  }

  function FileDropzone(props) {
    var s = React.useState(false);
    var ref = React.useRef(null);
    var over = props.dragging || s[0];
    function take(list) { if (props.onFiles && list) props.onFiles(Array.prototype.slice.call(list)); }
    return h('div', { className: cx('ai-drop', over && 'is-over'), role: 'button', tabIndex: 0,
        onClick: function () { if (ref.current) ref.current.click(); },
        onKeyDown: function (e) { if ((e.key === 'Enter' || e.key === ' ') && ref.current) { e.preventDefault(); ref.current.click(); } },
        onDragOver: function (e) { e.preventDefault(); s[1](true); }, onDragLeave: function () { s[1](false); },
        onDrop: function (e) { e.preventDefault(); s[1](false); take(e.dataTransfer.files); } },
      h('input', { ref: ref, type: 'file', multiple: props.multiple !== false, accept: props.accept, hidden: true, onChange: function (e) { take(e.target.files); } }),
      h('span', { className: 'ai-drop-icon' }, h(Icon, { name: 'upload', size: 20 })),
      h('span', { className: 'ai-drop-title' }, props.title || (over ? 'Drop to upload' : h(React.Fragment, null, 'Drag files here or ', h('span', { className: 'ai-link' }, 'browse')))),
      h('span', { className: 'ai-drop-hint' }, props.hint || 'PDF, DOCX, TXT or images, up to 20 MB'));
  }

  function AttachmentChip(props) {
    var up = props.progress != null && props.progress < 100;
    return h('div', { className: cx('ai-attach', props.error && 'is-error') },
      h('span', { className: 'ai-attach-icon' }, h(Icon, { name: props.error ? 'warning' : 'file' })),
      h('span', { className: 'ai-attach-text' },
        h('span', { className: 'ai-attach-name' }, props.name),
        h('span', { className: 'ai-attach-meta' }, props.error || (up ? 'Uploading… ' + Math.round(props.progress) + '%' : [props.type, props.size].filter(Boolean).join(' · '))),
        up ? h('span', { className: 'ai-attach-bar' }, h('span', { style: { width: props.progress + '%' } })) : null),
      props.onRemove === false ? null : h('button', { type: 'button', className: 'ai-attach-x', 'aria-label': 'Remove ' + props.name, onClick: props.onRemove }, h(Icon, { name: 'close', size: 14 })));
  }

  function Citation(props) {
    return h('span', { className: 'ai-tip-wrap ai-cite-wrap' + (props.open ? ' is-open' : '') },
      h('a', { className: 'ai-cite', href: props.href || '#', target: props.href ? '_blank' : undefined, rel: 'noreferrer', 'aria-label': 'Source ' + props.index + ': ' + (props.title || '') }, props.index),
      props.title ? h('span', { className: 'ai-tip ai-tip-top ai-cite-tip', role: 'tooltip' }, h('strong', null, props.title), props.source ? h('span', null, props.source) : null) : null);
  }

  function SourceList(props) {
    return h('div', { className: 'ai-sources' },
      props.label === false ? null : h('span', { className: 'ai-msg-name' }, props.label || 'Sources'),
      h('div', { className: 'ai-sources-row' }, (props.sources || []).map(function (s, i) {
        return h('a', { key: i, className: 'ai-source', href: s.href || '#', target: s.href ? '_blank' : undefined, rel: 'noreferrer' },
          h('span', { className: 'ai-source-top' }, h('span', { className: 'ai-cite' }, i + 1), h('span', { className: 'ai-source-site' }, s.source)),
          h('span', { className: 'ai-source-title' }, s.title));
      })));
  }

  function Reasoning(props) {
    var s = React.useState(!!props.defaultOpen);
    var open = props.open != null ? props.open : s[0];
    return h('div', { className: cx('ai-reason', open && 'is-open') },
      h('button', { type: 'button', className: 'ai-reason-head', 'aria-expanded': open, onClick: function () { s[1](!open); } },
        props.active ? h(Spinner, { size: 'small' }) : h(Icon, { name: 'lightbulb' }),
        h('span', null, props.active ? (props.activeTitle || 'Thinking…') : (props.title || 'Thought for a few seconds')),
        h(Icon, { name: 'chevron-down', className: 'ai-reason-chev' })),
      open ? h('div', { className: 'ai-reason-body' }, props.children) : null);
  }

  function Accordion(props) {
    var items = props.items || [];
    var s = React.useState(props.defaultOpen != null ? [].concat(props.defaultOpen) : []);
    function toggle(i) { var o = s[0].indexOf(i) >= 0; s[1](o ? s[0].filter(function (x) { return x !== i; }) : (props.multiple ? s[0].concat(i) : [i])); }
    return h('div', { className: 'ai-accordion' }, items.map(function (it, i) {
      var o = s[0].indexOf(i) >= 0;
      return h('div', { key: i, className: cx('ai-acc-item', o && 'is-open') },
        h('button', { type: 'button', className: 'ai-acc-head', 'aria-expanded': o, onClick: function () { toggle(i); } }, h('span', null, it.title), h(Icon, { name: 'chevron-down', className: 'ai-acc-chev' })),
        o ? h('div', { className: 'ai-acc-body' }, it.content) : null);
    }));
  }

  function Table(props) {
    var cols = props.columns || [], rows = props.rows || [];
    return h('div', { className: 'ai-table-wrap' }, h('table', { className: 'ai-table' },
      h('thead', null, h('tr', null, cols.map(function (c) { return h('th', { key: c.key, style: { textAlign: c.align || 'left', width: c.width } }, c.label); }))),
      h('tbody', null, rows.map(function (r, i) {
        return h('tr', { key: r.id || i }, cols.map(function (c) { return h('td', { key: c.key, style: { textAlign: c.align || 'left' } }, c.render ? c.render(r[c.key], r) : r[c.key]); }));
      }))));
  }

  function Pagination(props) {
    var total = props.total || 1;
    var s = React.useState(props.defaultPage || 1);
    var p = props.page != null ? props.page : s[0];
    function go(n) { if (n < 1 || n > total) return; if (props.page == null) s[1](n); if (props.onChange) props.onChange(n); }
    var list = [];
    for (var n = 1; n <= total; n++) { if (n === 1 || n === total || Math.abs(n - p) <= 1) list.push(n); else if (list[list.length - 1] !== '…') list.push('…'); }
    return h('nav', { className: 'ai-pages', 'aria-label': 'Pagination' },
      h(IconButton, { icon: 'chevron-left', label: 'Previous page', size: 'small', disabled: p <= 1, onClick: function () { go(p - 1); } }),
      list.map(function (n, i) {
        return n === '…' ? h('span', { key: 'e' + i, className: 'ai-page-gap' }, '…')
          : h('button', { key: n, type: 'button', className: cx('ai-page', n === p && 'is-current'), 'aria-current': n === p ? 'page' : undefined, onClick: function () { go(n); } }, n);
      }),
      h(IconButton, { icon: 'chevron-right', label: 'Next page', size: 'small', disabled: p >= total, onClick: function () { go(p + 1); } }));
  }

  function Breadcrumbs(props) {
    var items = props.items || [];
    return h('nav', { className: 'ai-crumbs', 'aria-label': 'Breadcrumb' }, items.map(function (it, i) {
      var last = i === items.length - 1, label = typeof it === 'string' ? it : it.label;
      return h(React.Fragment, { key: i },
        last ? h('span', { className: 'ai-crumb is-current', 'aria-current': 'page' }, label) : h('a', { className: 'ai-crumb', href: (it && it.href) || '#' }, label),
        last ? null : h(Icon, { name: 'chevron-right', size: 12 }));
    }));
  }

  function NavItem(props) {
    return h('a', { className: cx('ai-nav', props.active && 'is-active', props.state === 'hover' && 'is-hover', props.state === 'focus' && 'is-focus'), href: props.href || '#', 'aria-current': props.active ? 'page' : undefined, onClick: props.onClick },
      props.icon ? h(Icon, { name: props.icon }) : null,
      h('span', { className: 'ai-nav-label' }, props.children),
      props.count != null ? h('span', { className: 'ai-nav-count' }, props.count) : null);
  }

  function Kbd(props) {
    var keys = props.keys || [props.children];
    return h('span', { className: 'ai-kbd-group' }, keys.map(function (k, i) { return h('kbd', { key: i, className: 'ai-kbd' }, k); }));
  }

  function Divider(props) {
    if (props.vertical) return h('span', { className: 'ai-divider-v', role: 'separator', 'aria-orientation': 'vertical' });
    return h('div', { className: cx('ai-divider', props.label && 'has-label'), role: 'separator' }, props.label ? h('span', null, props.label) : null);
  }

  function Link(props) {
    return h('a', { className: cx('ai-link', props.subtle && 'ai-link-subtle', props.state === 'hover' && 'is-hover', props.state === 'focus' && 'is-focus'), href: props.href || '#', target: props.external ? '_blank' : undefined, rel: props.external ? 'noreferrer' : undefined },
      props.children, props.external ? h(Icon, { name: 'external-link', size: 12 }) : null);
  }

  function Drawer(props) {
    var panel = h('aside', { className: cx('ai-drawer', props.side === 'left' && 'ai-drawer-left'), role: 'dialog', 'aria-label': props.title, style: { width: props.width || 400 } },
      h('div', { className: 'ai-drawer-head' }, h('h2', { className: 'ai-modal-title' }, props.title), h(IconButton, { icon: 'close', label: 'Close', size: 'small', onClick: props.onClose })),
      h('div', { className: 'ai-drawer-body' }, props.children),
      props.footer ? h('div', { className: 'ai-drawer-foot' }, props.footer) : null);
    return props.inline ? panel : h('div', { className: 'ai-modal-backdrop ai-drawer-backdrop' }, panel);
  }

  function Stepper(props) {
    var steps = props.steps || [], cur = props.current || 0;
    return h('ol', { className: 'ai-steps' }, steps.map(function (st, i) {
      var state = i < cur ? 'done' : i === cur ? 'current' : 'todo';
      return h('li', { key: i, className: 'ai-step is-' + state, 'aria-current': state === 'current' ? 'step' : undefined },
        h('span', { className: 'ai-step-dot' }, state === 'done' ? h(Icon, { name: 'check', size: 12, strokeWidth: 2 }) : i + 1),
        h('span', { className: 'ai-step-label' }, st),
        i < steps.length - 1 ? h('span', { className: 'ai-step-line' }) : null);
    }));
  }

  /* ---------- Touch / mobile ---------- */
  function TopAppBar(props) {
    return h('header', { className: cx('ai-appbar', props.large && 'ai-appbar-large') },
      h('div', { className: 'ai-appbar-row' },
        props.onBack !== undefined || props.back ? h('button', { type: 'button', className: 'ai-touch-btn', 'aria-label': 'Back', onClick: props.onBack }, h(Icon, { name: 'arrow-left', size: 20 }))
          : props.menu ? h('button', { type: 'button', className: 'ai-touch-btn', 'aria-label': 'Menu', onClick: props.onMenu }, h(Icon, { name: 'menu', size: 20 })) : h('span', { className: 'ai-appbar-pad' }),
        props.large ? h('span', { style: { flex: 1 } }) : h('div', { className: 'ai-appbar-title' }, h('span', null, props.title), props.subtitle ? h('small', null, props.subtitle) : null),
        h('div', { className: 'ai-appbar-actions' }, (props.actions || []).map(function (a, i) {
          return h('button', { key: i, type: 'button', className: 'ai-touch-btn', 'aria-label': a.label, onClick: a.onClick }, h(Icon, { name: a.icon, size: 20 }));
        }))),
      props.large ? h('h1', { className: 'ai-appbar-bigtitle' }, props.title) : null);
  }

  function BottomNav(props) {
    var items = props.items || [];
    var s = React.useState(props.defaultValue || (items[0] && items[0].label));
    var cur = props.value != null ? props.value : s[0];
    return h('nav', { className: 'ai-bnav', 'aria-label': 'Main' }, items.map(function (it) {
      var on = it.label === cur;
      return h('button', { key: it.label, type: 'button', className: cx('ai-bnav-item', on && 'is-active'), 'aria-current': on ? 'page' : undefined,
        onClick: function () { if (props.value == null) s[1](it.label); if (props.onChange) props.onChange(it.label); } },
        h('span', { className: 'ai-bnav-icon' }, h(Icon, { name: it.icon, size: 22 }), it.badge ? h('span', { className: 'ai-bnav-badge' }, it.badge) : null),
        h('span', { className: 'ai-bnav-label' }, it.label));
    }));
  }

  function BottomSheet(props) {
    var sheet = h('div', { className: 'ai-sheet', role: 'dialog', 'aria-label': props.title },
      h('span', { className: 'ai-sheet-handle', 'aria-hidden': true }),
      props.title ? h('div', { className: 'ai-sheet-head' }, h('h2', { className: 'ai-sheet-title' }, props.title), props.description ? h('p', { className: 'ai-sheet-desc' }, props.description) : null) : null,
      h('div', { className: 'ai-sheet-body' }, props.children),
      props.actions ? h('div', { className: 'ai-sheet-actions' }, props.actions) : null);
    return props.inline ? h('div', { className: 'ai-sheet-stage' }, h('div', { className: 'ai-sheet-scrim' }), sheet) : h('div', { className: 'ai-modal-backdrop ai-sheet-backdrop' }, sheet);
  }

  function ActionSheet(props) {
    var body = h('div', { className: 'ai-asheet' },
      h('div', { className: 'ai-asheet-group' },
        props.title ? h('div', { className: 'ai-asheet-title' }, props.title) : null,
        (props.actions || []).map(function (a, i) {
          return h('button', { key: i, type: 'button', className: cx('ai-asheet-btn', a.destructive && 'is-danger'), onClick: a.onClick }, a.icon ? h(Icon, { name: a.icon, size: 20 }) : null, a.label);
        })),
      h('button', { type: 'button', className: 'ai-asheet-btn ai-asheet-cancel', onClick: props.onCancel }, props.cancelLabel || 'Cancel'));
    return props.inline ? h('div', { className: 'ai-sheet-stage' }, h('div', { className: 'ai-sheet-scrim' }), body) : h('div', { className: 'ai-modal-backdrop ai-sheet-backdrop' }, body);
  }

  function ListItem(props) {
    var lead = props.avatar ? props.avatar : props.icon ? h('span', { className: cx('ai-li-icon', props.iconTone && 'is-' + props.iconTone) }, h(Icon, { name: props.icon, size: 20 })) : null;
    var trail = props.trailing != null ? props.trailing
      : props.value != null ? h('span', { className: 'ai-li-value' }, props.value, props.chevron !== false && props.onClick ? h(Icon, { name: 'chevron-right' }) : null)
      : props.onClick || props.chevron ? h(Icon, { name: 'chevron-right' }) : null;
    var Tag = props.onClick ? 'button' : 'div';
    return h(Tag, { type: props.onClick ? 'button' : undefined, className: cx('ai-li', props.subtitle && 'has-sub', props.destructive && 'is-danger'), onClick: props.onClick },
      lead,
      h('span', { className: 'ai-li-text' }, h('span', { className: 'ai-li-title' }, props.title), props.subtitle ? h('span', { className: 'ai-li-sub' }, props.subtitle) : null),
      trail ? h('span', { className: 'ai-li-trail' }, trail) : null);
  }

  function SwipeRow(props) {
    var acts = props.actions || [{ label: 'Archive', icon: 'archive' }, { label: 'Delete', icon: 'trash', destructive: true }];
    var W = acts.length * 80;
    var s = React.useState(props.open ? -W : 0), x = s[0], setX = s[1];
    var drag = React.useRef(null);
    function down(e) { drag.current = { start: e.clientX, base: x }; if (e.currentTarget.setPointerCapture) e.currentTarget.setPointerCapture(e.pointerId); }
    function move(e) { if (!drag.current) return; var d = drag.current.base + (e.clientX - drag.current.start); setX(Math.max(-W - 24, Math.min(0, d))); }
    function up() { if (!drag.current) return; drag.current = null; setX(function (v) { return v < -W / 2 ? -W : 0; }); }
    return h('div', { className: 'ai-swipe' },
      h('div', { className: 'ai-swipe-actions', style: { width: W } }, acts.map(function (a, i) {
        return h('button', { key: i, type: 'button', className: cx('ai-swipe-act', a.destructive && 'is-danger'), onClick: function () { setX(0); if (a.onClick) a.onClick(); } }, h(Icon, { name: a.icon, size: 20 }), a.label);
      })),
      h('div', { className: cx('ai-swipe-front', !drag.current && 'is-settling'), style: { transform: 'translateX(' + x + 'px)' },
        onPointerDown: down, onPointerMove: move, onPointerUp: up, onPointerCancel: up }, props.children));
  }

  function Fab(props) {
    return h('button', { type: 'button', className: cx('ai-fab', props.label && 'is-extended'), 'aria-label': props.label ? undefined : (props.ariaLabel || 'New'), onClick: props.onClick },
      h(Icon, { name: props.icon || 'plus', size: 22, strokeWidth: 2 }), props.label ? h('span', null, props.label) : null);
  }

  function FilterChips(props) {
    var items = props.items || [];
    var s = React.useState(props.defaultValue || (props.multiple ? [] : items[0]));
    var cur = props.value != null ? props.value : s[0];
    function isOn(it) { return props.multiple ? cur.indexOf(it) >= 0 : cur === it; }
    function tap(it) {
      var next = props.multiple ? (isOn(it) ? cur.filter(function (x) { return x !== it; }) : cur.concat(it)) : it;
      if (props.value == null) s[1](next); if (props.onChange) props.onChange(next);
    }
    return h('div', { className: 'ai-fchips', role: props.multiple ? 'group' : 'radiogroup' }, items.map(function (it) {
      var on = isOn(it);
      return h('button', { key: it, type: 'button', className: cx('ai-fchip', on && 'is-on'), 'aria-pressed': on, onClick: function () { tap(it); } }, on && props.multiple ? h(Icon, { name: 'check', size: 14, strokeWidth: 2 }) : null, it);
    }));
  }

  function SearchBar(props) {
    var s = React.useState(props.defaultValue || ''), f = React.useState(!!props.focused);
    var val = props.value != null ? props.value : s[0];
    return h('div', { className: cx('ai-search', f[0] && 'is-focused') },
      h('label', { className: 'ai-search-field' }, h(Icon, { name: 'search', size: 18 }),
        h('input', { type: 'search', value: val, placeholder: props.placeholder || 'Search', onFocus: function () { f[1](true); },
          onChange: function (e) { if (props.value == null) s[1](e.target.value); if (props.onChange) props.onChange(e.target.value); } }),
        val ? h('button', { type: 'button', className: 'ai-search-clear', 'aria-label': 'Clear', onClick: function () { s[1](''); if (props.onChange) props.onChange(''); } }, h(Icon, { name: 'close', size: 14, strokeWidth: 2 })) : null),
      f[0] ? h('button', { type: 'button', className: 'ai-search-cancel', onClick: function () { f[1](false); s[1](''); if (props.onCancel) props.onCancel(); } }, 'Cancel') : null);
  }

  function MobileComposer(props) {
    var s = React.useState(props.defaultValue || '');
    var val = props.value != null ? props.value : s[0];
    var has = !!val.trim();
    return h('div', { className: 'ai-mcomp' },
      h('button', { type: 'button', className: 'ai-touch-btn ai-mcomp-plus', 'aria-label': 'Add attachment', onClick: props.onAttach }, h(Icon, { name: 'plus', size: 20 })),
      h('div', { className: 'ai-mcomp-field' },
        h('textarea', { rows: 1, value: val, placeholder: props.placeholder || 'Message', 'aria-label': 'Message',
          onChange: function (e) { if (props.value == null) s[1](e.target.value); if (props.onChange) props.onChange(e.target.value); } })),
      props.generating ? h('button', { type: 'button', className: 'ai-touch-btn ai-mcomp-send is-stop', 'aria-label': 'Stop', onClick: props.onStop }, h(Icon, { name: 'stop', size: 18 }))
        : has ? h('button', { type: 'button', className: 'ai-touch-btn ai-mcomp-send', 'aria-label': 'Send', onClick: function () { if (props.onSend) props.onSend(val); } }, h(Icon, { name: 'arrow-right', size: 20, strokeWidth: 2 }))
        : h('button', { type: 'button', className: 'ai-touch-btn ai-mcomp-mic', 'aria-label': 'Voice input', onClick: props.onVoice }, h(Icon, { name: 'mic', size: 20 })));
  }

  /* ---------- Composed ---------- */
  function ChatThread(props) {
    var msgs = props.messages || [];
    return h('div', { className: cx('ai-thread', props.compact && 'is-compact') },
      msgs.map(function (m, i) {
        var lastAi = m.sender === 'ai' && i === msgs.length - 1 && !props.typing;
        return h('div', { key: i, className: 'ai-thread-item' },
          m.reasoning ? h('div', { className: 'ai-thread-indent' }, h(Reasoning, { title: m.reasoning }, m.reasoningText || '')) : null,
          h(ChatMessage, { sender: m.sender, showAvatar: !props.compact, attachment: m.attachment }, m.text),
          m.sources ? h('div', { className: 'ai-thread-indent' }, h(SourceList, { sources: m.sources })) : null,
          lastAi && props.actions !== false ? h('div', { className: 'ai-thread-indent' }, h(ResponseActions, null)) : null);
      }),
      props.typing ? h(TypingIndicator, { showAvatar: !props.compact, text: typeof props.typing === 'string' ? props.typing : undefined }) : null);
  }

  function ConversationItem(props) {
    return h('button', { type: 'button', className: cx('ai-conv', props.active && 'is-active', props.unread && 'is-unread'), onClick: props.onClick },
      h(Avatar, { type: props.ai === false ? 'user' : 'ai', initials: props.initials }),
      h('span', { className: 'ai-conv-text' },
        h('span', { className: 'ai-conv-top' }, h('span', { className: 'ai-conv-title' }, props.title), h('span', { className: 'ai-conv-time' }, props.time)),
        h('span', { className: 'ai-conv-bottom' }, h('span', { className: 'ai-conv-preview' }, props.preview), props.unread ? h('span', { className: 'ai-conv-dot', 'aria-label': 'Unread' }) : null)));
  }

  function OptionCards(props) {
    var opts = props.options || [];
    var s = React.useState(props.defaultValue || (opts[0] && opts[0].value));
    var cur = props.value != null ? props.value : s[0];
    return h('div', { className: cx('ai-opts', props.horizontal && 'is-horizontal'), role: 'radiogroup', 'aria-label': props.label },
      opts.map(function (o) {
        var on = o.value === cur;
        return h('button', { key: o.value, type: 'button', role: 'radio', 'aria-checked': on, className: cx('ai-opt', on && 'is-on'),
          onClick: function () { if (props.value == null) s[1](o.value); if (props.onChange) props.onChange(o.value); } },
          o.icon ? h('span', { className: 'ai-opt-icon' }, h(Icon, { name: o.icon, size: 20 })) : null,
          h('span', { className: 'ai-opt-text' },
            h('span', { className: 'ai-opt-title' }, o.title, o.badge ? h(Badge, { tone: 'brand' }, o.badge) : null),
            o.description ? h('span', { className: 'ai-opt-desc' }, o.description) : null),
          h('span', { className: 'ai-radio-dot' }));
      }));
  }

  function PlanCard(props) {
    return h('div', { className: cx('ai-plan', props.featured && 'is-featured') },
      props.featured ? h('span', { className: 'ai-plan-flag' }, props.flag || 'Most popular') : null,
      h('div', { className: 'ai-plan-head' }, h('h3', { className: 'ai-plan-name' }, props.name), props.description ? h('p', { className: 'ai-plan-desc' }, props.description) : null),
      h('div', { className: 'ai-plan-price' }, h('span', { className: 'ai-plan-amount' }, props.price), props.period ? h('span', { className: 'ai-plan-period' }, props.period) : null),
      h(Button, { variant: props.featured ? 'primary' : 'secondary', block: true, onClick: props.onSelect, disabled: props.current }, props.current ? 'Current plan' : (props.cta || 'Choose ' + props.name)),
      h('ul', { className: 'ai-plan-feats' }, (props.features || []).map(function (f, i) { return h('li', { key: i }, h(Icon, { name: 'check', size: 14, strokeWidth: 2 }), f); })));
  }

  function UsageMeter(props) {
    return h('div', { className: 'ai-usage' },
      h('div', { className: 'ai-usage-head' }, h('h3', { className: 'ai-card-title' }, props.title || 'Usage'), props.reset ? h('span', { className: 'ai-usage-reset' }, props.reset) : null),
      (props.items || []).map(function (it, i) {
        var pct = Math.min(100, (it.used / it.limit) * 100);
        return h('div', { key: i, className: cx('ai-usage-row', pct >= 90 && 'is-high') },
          h('div', { className: 'ai-progress-top' }, h('span', null, it.label), h('span', null, it.used.toLocaleString() + ' / ' + it.limit.toLocaleString() + (it.unit ? ' ' + it.unit : ''))),
          h('div', { className: 'ai-progress-track' }, h('div', { className: 'ai-progress-fill', style: { width: pct + '%' } })));
      }),
      props.action ? h('div', null, props.action) : null);
  }

  function SignInCard(props) {
    return h('div', { className: 'ai-signin' },
      h('div', { className: 'ai-signin-head' }, h(Avatar, { type: 'ai' }), h('h2', { className: 'ai-signin-title' }, props.title || 'Welcome back'), h('p', { className: 'ai-signin-desc' }, props.description || 'Sign in to continue to your chats.')),
      h(Button, { variant: 'secondary', block: true, onClick: props.onProvider }, props.providerLabel || 'Continue with Google'),
      h(Divider, { label: 'or' }),
      h(Input, { label: 'Email', type: 'email', placeholder: 'you@example.com' }),
      h(Button, { block: true, onClick: props.onSubmit }, props.submitLabel || 'Continue with email'),
      h('p', { className: 'ai-signin-foot' }, 'By continuing you agree to the ', h(Link, { subtle: true }, 'Terms'), ' and ', h(Link, { subtle: true }, 'Privacy policy'), '.'));
  }

  function WelcomeScreen(props) {
    return h('div', { className: 'ai-welcome' },
      h('div', { className: 'ai-welcome-hero' },
        h('span', { className: 'ai-empty-icon' }, h(Icon, { name: 'sparkle', size: 24 })),
        h('h1', { className: 'ai-welcome-title' }, props.title || 'How can I help today?'),
        props.description ? h('p', { className: 'ai-empty-desc' }, props.description) : null),
      h('div', { className: 'ai-welcome-chips' }, (props.suggestions || ['Summarize a document', 'Draft an email', 'Explain a concept', 'Plan my week']).map(function (s, i) {
        return h(SuggestionChip, { key: i, icon: ['file', 'edit', 'lightbulb', 'sparkle'][i % 4] }, s);
      })),
      h('div', { className: 'ai-welcome-composer' }, props.mobile ? h(MobileComposer, null) : h(PromptComposer, { model: props.model || 'Fast' })));
  }

  function MobileChatScreen(props) {
    return h('div', { className: 'ai-phone' },
      h('div', { className: 'ai-phone-status' }, h('span', null, '9:41'), h('span', { className: 'ai-phone-notch' }), h('span', null, '100%')),
      h(TopAppBar, { menu: true, title: props.title || 'Q4 report summary', subtitle: props.subtitle || 'Fast', actions: [{ icon: 'edit', label: 'New chat' }] }),
      h('div', { className: 'ai-phone-body' }, props.children || h(ChatThread, { compact: true, typing: props.typing, messages: props.messages || [
        { sender: 'user', text: 'Summarize the Q4 report. Focus on revenue and risks.' },
        { sender: 'ai', text: 'Revenue grew 18% quarter over quarter, mostly from the new subscription tier. Two risks: rising infrastructure costs and a slower enterprise pipeline.', reasoning: 'Thought for 8 seconds' }
      ] })),
      h('div', { className: 'ai-phone-foot' }, h(MobileComposer, null)),
      h('span', { className: 'ai-phone-home', 'aria-hidden': true }));
  }

  function StateGrid(props) {
    return h('div', { className: 'ai-states', style: { gridTemplateColumns: 'repeat(' + (props.columns || (props.items || []).length) + ', minmax(0, max-content))' } },
      (props.items || []).map(function (it, i) {
        return h('div', { key: i, className: 'ai-state' }, h('span', { className: 'ai-state-label' }, it.label), h('div', { className: 'ai-state-body' }, it.node));
      }));
  }


export {
  Button,
  Input,
  Select,
  Checkbox,
  Toggle,
  Badge,
  Avatar,
  ChatMessage,
  Card,
  Menu,
  MenuItem,
  Tabs,
  Modal,
  Icon,
  IconButton,
  Textarea,
  RadioGroup,
  SegmentedControl,
  TypingIndicator,
  ResponseActions,
  SuggestionChip,
  PromptComposer,
  CodeBlock,
  Tooltip,
  Alert,
  Toast,
  Spinner,
  ProgressBar,
  Skeleton,
  EmptyState,
  Slider,
  FileDropzone,
  AttachmentChip,
  Citation,
  SourceList,
  Reasoning,
  Accordion,
  Table,
  Pagination,
  Breadcrumbs,
  NavItem,
  Kbd,
  Divider,
  Link,
  Drawer,
  Stepper,
  TopAppBar,
  BottomNav,
  BottomSheet,
  ActionSheet,
  ListItem,
  SwipeRow,
  Fab,
  FilterChips,
  SearchBar,
  MobileComposer,
  ChatThread,
  ConversationItem,
  OptionCards,
  PlanCard,
  UsageMeter,
  SignInCard,
  WelcomeScreen,
  MobileChatScreen,
  StateGrid
};
