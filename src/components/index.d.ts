import type * as React from 'react';
export type IconName = 'plus' | 'check' | 'search' | 'chevron-down' | 'close' | 'arrow-right' | 'sparkle' | 'copy' | 'refresh' | 'thumbs-up' | 'thumbs-down' | 'info' | 'warning' | 'paperclip' | 'stop' | 'file' | 'upload' | 'chevron-right' | 'chevron-left' | 'external-link' | 'message' | 'folder' | 'settings' | 'trash' | 'more' | 'lightbulb' | 'home' | 'arrow-left' | 'menu' | 'mic' | 'edit' | 'archive' | 'user' | 'bell' | 'share' | 'image';
export interface IconProps { name: IconName; size?: number; strokeWidth?: number; label?: string; className?: string }
export declare function Icon(props: IconProps): React.ReactElement;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'; size?: 'small' | 'medium'; icon?: IconName; block?: boolean; state?: 'hover' }
export declare function Button(props: ButtonProps): React.ReactElement;
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { label?: string; helper?: string; error?: string; icon?: IconName; state?: 'focus' }
export declare function Input(props: InputProps): React.ReactElement;
export interface SelectProps { label?: string; value?: string; placeholder?: string; helper?: string; open?: boolean; disabled?: boolean; onClick?: () => void }
export declare function Select(props: SelectProps): React.ReactElement;
export interface CheckboxProps { label?: React.ReactNode; checked?: boolean; defaultChecked?: boolean; disabled?: boolean; onChange?: (checked: boolean) => void; children?: React.ReactNode }
export declare function Checkbox(props: CheckboxProps): React.ReactElement;
export interface ToggleProps { label?: React.ReactNode; on?: boolean; defaultOn?: boolean; disabled?: boolean; onChange?: (on: boolean) => void; children?: React.ReactNode }
export declare function Toggle(props: ToggleProps): React.ReactElement;
export interface BadgeProps { tone?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger'; children?: React.ReactNode }
export declare function Badge(props: BadgeProps): React.ReactElement;
export interface AvatarProps { type?: 'ai' | 'user'; initials?: string; size?: 'small' | 'medium'; label?: string }
export declare function Avatar(props: AvatarProps): React.ReactElement;
export interface ChatMessageProps { sender?: 'ai' | 'user'; name?: string; initials?: string; showName?: boolean; showAvatar?: boolean; attachment?: React.ReactNode; children?: React.ReactNode }
export declare function ChatMessage(props: ChatMessageProps): React.ReactElement;
export interface CardProps { variant?: 'outlined' | 'elevated'; title?: string; description?: string; badge?: string; badgeTone?: BadgeProps['tone']; actions?: React.ReactNode; children?: React.ReactNode; style?: React.CSSProperties }
export declare function Card(props: CardProps): React.ReactElement;
export interface MenuProps { width?: number; children?: React.ReactNode; style?: React.CSSProperties }
export declare function Menu(props: MenuProps): React.ReactElement;
export interface MenuItemProps { selected?: boolean; icon?: IconName; state?: 'hover'; onClick?: () => void; children?: React.ReactNode }
export declare function MenuItem(props: MenuItemProps): React.ReactElement;
export interface TabsProps { items: string[]; value?: string; defaultValue?: string; onChange?: (value: string) => void; style?: React.CSSProperties }
export declare function Tabs(props: TabsProps): React.ReactElement;
export interface ModalProps { title: string; children?: React.ReactNode; destructive?: boolean; confirmLabel?: string; cancelLabel?: string; footer?: React.ReactNode | false; inline?: boolean; onClose?: () => void; onConfirm?: () => void }
export declare function Modal(props: ModalProps): React.ReactElement;
declare global { interface Window { AIDesign: { Button: typeof Button; Input: typeof Input; Select: typeof Select; Checkbox: typeof Checkbox; Toggle: typeof Toggle; Badge: typeof Badge; Avatar: typeof Avatar; ChatMessage: typeof ChatMessage; Card: typeof Card; Menu: typeof Menu; MenuItem: typeof MenuItem; Tabs: typeof Tabs; Modal: typeof Modal; Icon: typeof Icon; IconButton: typeof IconButton; Textarea: typeof Textarea; RadioGroup: typeof RadioGroup; SegmentedControl: typeof SegmentedControl; TypingIndicator: typeof TypingIndicator; ResponseActions: typeof ResponseActions; SuggestionChip: typeof SuggestionChip; PromptComposer: typeof PromptComposer; CodeBlock: typeof CodeBlock; Tooltip: typeof Tooltip; Alert: typeof Alert; Toast: typeof Toast; Spinner: typeof Spinner; ProgressBar: typeof ProgressBar; Skeleton: typeof Skeleton; EmptyState: typeof EmptyState; Slider: typeof Slider; FileDropzone: typeof FileDropzone; AttachmentChip: typeof AttachmentChip; Citation: typeof Citation; SourceList: typeof SourceList; Reasoning: typeof Reasoning; Accordion: typeof Accordion; Table: typeof Table; Pagination: typeof Pagination; Breadcrumbs: typeof Breadcrumbs; NavItem: typeof NavItem; Kbd: typeof Kbd; Divider: typeof Divider; Link: typeof Link; Drawer: typeof Drawer; Stepper: typeof Stepper; TopAppBar: typeof TopAppBar; BottomNav: typeof BottomNav; BottomSheet: typeof BottomSheet; ActionSheet: typeof ActionSheet; ListItem: typeof ListItem; SwipeRow: typeof SwipeRow; Fab: typeof Fab; FilterChips: typeof FilterChips; SearchBar: typeof SearchBar; MobileComposer: typeof MobileComposer; ChatThread: typeof ChatThread; ConversationItem: typeof ConversationItem; OptionCards: typeof OptionCards; PlanCard: typeof PlanCard; UsageMeter: typeof UsageMeter; SignInCard: typeof SignInCard; WelcomeScreen: typeof WelcomeScreen; MobileChatScreen: typeof MobileChatScreen } } }
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { icon: IconName | 'copy' | 'refresh' | 'thumbs-up' | 'thumbs-down' | 'info' | 'warning' | 'paperclip' | 'stop' | 'file' | 'upload' | 'chevron-right' | 'chevron-left' | 'external-link' | 'message' | 'folder' | 'settings' | 'trash' | 'more' | 'lightbulb' | 'home' | 'arrow-left' | 'menu' | 'mic' | 'edit' | 'archive' | 'user' | 'bell' | 'share' | 'image'; label: string; variant?: 'ghost' | 'secondary' | 'primary'; size?: 'small' | 'medium'; active?: boolean }
export declare function IconButton(props: IconButtonProps): React.ReactElement;
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { label?: string; helper?: string; error?: string }
export declare function Textarea(props: TextareaProps): React.ReactElement;
export interface RadioGroupProps { label?: string; options: Array<string | { value: string; label: string; disabled?: boolean }>; value?: string; defaultValue?: string; onChange?: (value: string) => void; horizontal?: boolean; disabled?: boolean }
export declare function RadioGroup(props: RadioGroupProps): React.ReactElement;
export interface SegmentedControlProps { items: string[]; value?: string; defaultValue?: string; onChange?: (value: string) => void; size?: 'small' | 'medium' }
export declare function SegmentedControl(props: SegmentedControlProps): React.ReactElement;
export interface TypingIndicatorProps { text?: string; showAvatar?: boolean; label?: string }
export declare function TypingIndicator(props: TypingIndicatorProps): React.ReactElement;
export interface ResponseActionsProps { feedback?: 'up' | 'down' | null; onCopy?: () => void; onRegenerate?: () => void; onFeedback?: (value: 'up' | 'down' | null) => void }
export declare function ResponseActions(props: ResponseActionsProps): React.ReactElement;
export interface SuggestionChipProps { icon?: string; onClick?: () => void; children?: React.ReactNode }
export declare function SuggestionChip(props: SuggestionChipProps): React.ReactElement;
export interface PromptComposerProps { value?: string; defaultValue?: string; placeholder?: string; rows?: number; model?: string; generating?: boolean; disclaimer?: string | false; onChange?: (value: string) => void; onSend?: (value: string) => void; onStop?: () => void }
export declare function PromptComposer(props: PromptComposerProps): React.ReactElement;
export interface CodeBlockProps { code: string; language?: string }
export declare function CodeBlock(props: CodeBlockProps): React.ReactElement;
export interface TooltipProps { text: string; placement?: 'top' | 'bottom'; open?: boolean; children: React.ReactNode }
export declare function Tooltip(props: TooltipProps): React.ReactElement;
export interface AlertProps { tone?: 'info' | 'success' | 'warning' | 'danger'; title?: string; onClose?: () => void; children?: React.ReactNode }
export declare function Alert(props: AlertProps): React.ReactElement;
export interface ToastProps { tone?: 'info' | 'success' | 'warning' | 'danger'; title?: string; action?: string; onAction?: () => void; onClose?: () => void; children?: React.ReactNode }
export declare function Toast(props: ToastProps): React.ReactElement;
export interface SpinnerProps { size?: 'small' | 'medium' | 'large'; label?: string }
export declare function Spinner(props: SpinnerProps): React.ReactElement;
export interface ProgressBarProps { value?: number; label?: string; showValue?: boolean; indeterminate?: boolean }
export declare function ProgressBar(props: ProgressBarProps): React.ReactElement;
export interface SkeletonProps { width?: number | string; height?: number | string; circle?: boolean; lines?: number }
export declare function Skeleton(props: SkeletonProps): React.ReactElement;
export interface EmptyStateProps { icon?: string; title: string; description?: string; action?: React.ReactNode }
export declare function EmptyState(props: EmptyStateProps): React.ReactElement;
export interface SliderProps { label?: string; min?: number; max?: number; step?: number; value?: number; defaultValue?: number; showValue?: boolean; format?: (v: number) => React.ReactNode; minLabel?: string; maxLabel?: string; disabled?: boolean; onChange?: (v: number) => void }
export declare function Slider(props: SliderProps): React.ReactElement;
export interface FileDropzoneProps { title?: React.ReactNode; hint?: string; accept?: string; multiple?: boolean; dragging?: boolean; onFiles?: (files: File[]) => void }
export declare function FileDropzone(props: FileDropzoneProps): React.ReactElement;
export interface AttachmentChipProps { name: string; type?: string; size?: string; progress?: number; error?: string; onRemove?: (() => void) | false }
export declare function AttachmentChip(props: AttachmentChipProps): React.ReactElement;
export interface CitationProps { index: number; title?: string; source?: string; href?: string; open?: boolean }
export declare function Citation(props: CitationProps): React.ReactElement;
export interface SourceListProps { label?: string | false; sources: Array<{ title: string; source: string; href?: string }> }
export declare function SourceList(props: SourceListProps): React.ReactElement;
export interface ReasoningProps { title?: string; active?: boolean; activeTitle?: string; open?: boolean; defaultOpen?: boolean; children?: React.ReactNode }
export declare function Reasoning(props: ReasoningProps): React.ReactElement;
export interface AccordionProps { items: Array<{ title: string; content: React.ReactNode }>; multiple?: boolean; defaultOpen?: number | number[] }
export declare function Accordion(props: AccordionProps): React.ReactElement;
export interface TableColumn { key: string; label: string; align?: 'left' | 'right' | 'center'; width?: number | string; render?: (value: any, row: any) => React.ReactNode }
export interface TableProps { columns: TableColumn[]; rows: Array<Record<string, any>> }
export declare function Table(props: TableProps): React.ReactElement;
export interface PaginationProps { total: number; page?: number; defaultPage?: number; onChange?: (page: number) => void }
export declare function Pagination(props: PaginationProps): React.ReactElement;
export interface BreadcrumbsProps { items: Array<string | { label: string; href?: string }> }
export declare function Breadcrumbs(props: BreadcrumbsProps): React.ReactElement;
export interface NavItemProps { icon?: string; active?: boolean; count?: number; href?: string; onClick?: () => void; children?: React.ReactNode }
export declare function NavItem(props: NavItemProps): React.ReactElement;
export interface KbdProps { keys?: string[]; children?: React.ReactNode }
export declare function Kbd(props: KbdProps): React.ReactElement;
export interface DividerProps { label?: string; vertical?: boolean }
export declare function Divider(props: DividerProps): React.ReactElement;
export interface LinkProps { href?: string; external?: boolean; subtle?: boolean; children?: React.ReactNode }
export declare function Link(props: LinkProps): React.ReactElement;
export interface DrawerProps { title: string; side?: 'right' | 'left'; width?: number; inline?: boolean; footer?: React.ReactNode; onClose?: () => void; children?: React.ReactNode }
export declare function Drawer(props: DrawerProps): React.ReactElement;
export interface StepperProps { steps: string[]; current?: number }
export declare function Stepper(props: StepperProps): React.ReactElement;
export interface TopAppBarProps { title: string; subtitle?: string; back?: boolean; onBack?: () => void; menu?: boolean; onMenu?: () => void; large?: boolean; actions?: Array<{ icon: string; label: string; onClick?: () => void }> }
export declare function TopAppBar(props: TopAppBarProps): React.ReactElement;
export interface BottomNavProps { items: Array<{ icon: string; label: string; badge?: number | string }>; value?: string; defaultValue?: string; onChange?: (label: string) => void }
export declare function BottomNav(props: BottomNavProps): React.ReactElement;
export interface BottomSheetProps { title?: string; description?: string; actions?: React.ReactNode; inline?: boolean; children?: React.ReactNode }
export declare function BottomSheet(props: BottomSheetProps): React.ReactElement;
export interface ActionSheetProps { title?: string; actions: Array<{ label: string; icon?: string; destructive?: boolean; onClick?: () => void }>; cancelLabel?: string; onCancel?: () => void; inline?: boolean }
export declare function ActionSheet(props: ActionSheetProps): React.ReactElement;
export interface ListItemProps { title: React.ReactNode; subtitle?: React.ReactNode; icon?: string; iconTone?: 'brand' | 'danger'; avatar?: React.ReactNode; value?: React.ReactNode; trailing?: React.ReactNode; chevron?: boolean; destructive?: boolean; onClick?: () => void }
export declare function ListItem(props: ListItemProps): React.ReactElement;
export interface SwipeRowProps { actions?: Array<{ label: string; icon: string; destructive?: boolean; onClick?: () => void }>; open?: boolean; children: React.ReactNode }
export declare function SwipeRow(props: SwipeRowProps): React.ReactElement;
export interface FabProps { icon?: string; label?: string; ariaLabel?: string; onClick?: () => void }
export declare function Fab(props: FabProps): React.ReactElement;
export interface FilterChipsProps { items: string[]; multiple?: boolean; value?: string | string[]; defaultValue?: string | string[]; onChange?: (value: string | string[]) => void }
export declare function FilterChips(props: FilterChipsProps): React.ReactElement;
export interface SearchBarProps { placeholder?: string; value?: string; defaultValue?: string; focused?: boolean; onChange?: (v: string) => void; onCancel?: () => void }
export declare function SearchBar(props: SearchBarProps): React.ReactElement;
export interface MobileComposerProps { value?: string; defaultValue?: string; placeholder?: string; generating?: boolean; onChange?: (v: string) => void; onSend?: (v: string) => void; onStop?: () => void; onAttach?: () => void; onVoice?: () => void }
export declare function MobileComposer(props: MobileComposerProps): React.ReactElement;
export interface ChatThreadMessage { sender: 'ai' | 'user'; text: React.ReactNode; reasoning?: string; reasoningText?: React.ReactNode; sources?: SourceListProps['sources']; attachment?: React.ReactNode }
export interface ChatThreadProps { messages: ChatThreadMessage[]; typing?: boolean | string; compact?: boolean; actions?: boolean }
export declare function ChatThread(props: ChatThreadProps): React.ReactElement;
export interface ConversationItemProps { title: string; preview?: string; time?: string; unread?: boolean; active?: boolean; ai?: boolean; initials?: string; onClick?: () => void }
export declare function ConversationItem(props: ConversationItemProps): React.ReactElement;
export interface OptionCardsProps { label?: string; options: Array<{ value: string; title: string; description?: string; icon?: string; badge?: string }>; value?: string; defaultValue?: string; horizontal?: boolean; onChange?: (v: string) => void }
export declare function OptionCards(props: OptionCardsProps): React.ReactElement;
export interface PlanCardProps { name: string; price: string; period?: string; description?: string; features?: string[]; featured?: boolean; flag?: string; current?: boolean; cta?: string; onSelect?: () => void }
export declare function PlanCard(props: PlanCardProps): React.ReactElement;
export interface UsageMeterProps { title?: string; reset?: string; items: Array<{ label: string; used: number; limit: number; unit?: string }>; action?: React.ReactNode }
export declare function UsageMeter(props: UsageMeterProps): React.ReactElement;
export interface SignInCardProps { title?: string; description?: string; providerLabel?: string; submitLabel?: string; onProvider?: () => void; onSubmit?: () => void }
export declare function SignInCard(props: SignInCardProps): React.ReactElement;
export interface WelcomeScreenProps { title?: string; description?: string; suggestions?: string[]; model?: string; mobile?: boolean }
export declare function WelcomeScreen(props: WelcomeScreenProps): React.ReactElement;
export interface MobileChatScreenProps { title?: string; subtitle?: string; messages?: ChatThreadMessage[]; typing?: boolean | string; children?: React.ReactNode }
export declare function MobileChatScreen(props: MobileChatScreenProps): React.ReactElement;
