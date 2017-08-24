
declare class TKAlert extends NSObject implements UIGestureRecognizerDelegate {

	static alloc(): TKAlert; // inherited from NSObject

	static new(): TKAlert; // inherited from NSObject

	readonly actions: NSArray<TKAlertAction>;

	actionsLayout: TKAlertActionsLayout;

	readonly alertView: TKAlertView;

	allowParallaxEffect: boolean;

	animationDuration: number;

	attributedMessage: NSAttributedString;

	attributedTitle: NSAttributedString;

	readonly buttonsView: TKAlertButtonsView;

	readonly contentView: TKAlertContentView;

	customFrame: CGRect;

	delegate: TKAlertDelegate;

	dismissMode: TKAlertDismissMode;

	dismissTimeout: number;

	readonly headerView: TKAlertContentView;

	message: string;

	readonly style: TKAlertStyle;

	swipeDismissDirection: TKAlertSwipeDismissDirection;

	tintColor: UIColor;

	title: string;

	visible: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	actionAtIndex(index: number): TKAlertAction;

	addAction(action: TKAlertAction): void;

	addActionWithTitleHandler(title: string, handler: (p1: TKAlert, p2: TKAlertAction) => boolean): TKAlertAction;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismiss(animated: boolean): void;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAction(action: TKAlertAction): void;

	removeActionAtIndex(index: number): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shake(): void;

	show(animated: boolean): void;
}

declare class TKAlertAction extends NSObject {

	static actionWithTitleHandler(title: string, handler: (p1: TKAlert, p2: TKAlertAction) => boolean): TKAlertAction;

	static alloc(): TKAlertAction; // inherited from NSObject

	static new(): TKAlertAction; // inherited from NSObject

	backgroundColor: UIColor;

	cornerRadius: number;

	font: UIFont;

	handler: (p1: TKAlert, p2: TKAlertAction) => boolean;

	tag: number;

	title: string;

	titleColor: UIColor;

	constructor(o: { title: string; handler: (p1: TKAlert, p2: TKAlertAction) => boolean; });

	initWithTitleHandler(title: string, handler: (p1: TKAlert, p2: TKAlertAction) => boolean): this;
}

declare const enum TKAlertActionsLayout {

	Horizontal = 0,

	Vertical = 1
}

declare const enum TKAlertAnimation {

	Scale = 0,

	Fade = 1,

	SlideFromLeft = 2,

	SlideFromTop = 3,

	SlideFromRight = 4,

	SlideFromBottom = 5
}

declare const enum TKAlertBackgroundStyle {

	Blur = 0,

	Dim = 1,

	None = 2
}

declare class TKAlertButtonsView extends TKView {

	static alloc(): TKAlertButtonsView; // inherited from NSObject

	static appearance(): TKAlertButtonsView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKAlertButtonsView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKAlertButtonsView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKAlertButtonsView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKAlertButtonsView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKAlertButtonsView; // inherited from UIAppearance

	static new(): TKAlertButtonsView; // inherited from NSObject
}

declare class TKAlertContentView extends TKView {

	static alloc(): TKAlertContentView; // inherited from NSObject

	static appearance(): TKAlertContentView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKAlertContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKAlertContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKAlertContentView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKAlertContentView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKAlertContentView; // inherited from UIAppearance

	static new(): TKAlertContentView; // inherited from NSObject

	alert: TKAlert;

	readonly imageView: UIImageView;

	readonly textLabel: UILabel;
}

interface TKAlertDelegate extends NSObjectProtocol {

	alertButtonForAction?(alert: TKAlert, action: TKAlertAction): UIButton;

	alertDidDismiss?(alert: TKAlert): void;

	alertDidDismissWithAction?(alert: TKAlert, action: TKAlertAction): void;

	alertDidShow?(alert: TKAlert): void;

	alertWillDismiss?(alert: TKAlert): void;

	alertWillShow?(alert: TKAlert): void;
}
declare var TKAlertDelegate: {

	prototype: TKAlertDelegate;
};

declare const enum TKAlertDismissMode {

	None = 0,

	Tap = 1,

	Swipe = 2
}

declare class TKAlertStyle extends TKStyleNode {

	static alloc(): TKAlertStyle; // inherited from NSObject

	static new(): TKAlertStyle; // inherited from NSObject

	backgroundColor: UIColor;

	backgroundDimAlpha: number;

	backgroundStyle: TKAlertBackgroundStyle;

	backgroundTintColor: UIColor;

	buttonHeight: number;

	buttonSpacing: number;

	buttonsInset: UIEdgeInsets;

	centerFrame: boolean;

	contentHeight: number;

	contentInset: UIEdgeInsets;

	contentSeparatorWidth: number;

	cornerRadius: number;

	dismissAnimation: TKAlertAnimation;

	headerHeight: number;

	maxWidth: number;

	messageColor: UIColor;

	showAnimation: TKAlertAnimation;

	titleColor: UIColor;

	titleSeparatorWidth: number;
}

declare const enum TKAlertSwipeDismissDirection {

	Horizontal = 0,

	Vertical = 1
}

declare class TKAlertView extends TKView {

	static alloc(): TKAlertView; // inherited from NSObject

	static appearance(): TKAlertView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKAlertView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKAlertView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKAlertView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKAlertView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKAlertView; // inherited from UIAppearance

	static new(): TKAlertView; // inherited from NSObject

	alert: TKAlert;

	readonly buttonsView: TKAlertButtonsView;

	readonly contentView: TKAlertContentView;

	readonly headerView: TKAlertContentView;
}

declare const enum TKAutoCompleteCompletionMode {

	StartsWith = 0,

	Contains = 1
}

declare class TKAutoCompleteController extends UIViewController {

	static alloc(): TKAutoCompleteController; // inherited from NSObject

	static new(): TKAutoCompleteController; // inherited from NSObject

	autocomplete: TKAutoCompleteTextView;
}

interface TKAutoCompleteDataSource extends NSObjectProtocol {

	autoCompleteCompletionForPrefix?(autocomplete: TKAutoCompleteTextView, prefix: string): NSArray<TKAutoCompleteToken>;

	autoCompleteCompletionsForString?(autocomplete: TKAutoCompleteTextView, input: string): void;
}
declare var TKAutoCompleteDataSource: {

	prototype: TKAutoCompleteDataSource;
};

interface TKAutoCompleteDelegate extends NSObjectProtocol {

	autoCompleteDidAddToken?(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): void;

	autoCompleteDidAutoComplete?(autocomplete: TKAutoCompleteTextView, completion: string): void;

	autoCompleteDidRemoveToken?(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): void;

	autoCompleteDidSelectToken?(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): void;

	autoCompleteDidStartEditing?(autocomplete: TKAutoCompleteTextView): void;

	autoCompleteShouldAddToken?(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): boolean;

	autoCompleteShouldRemoveToken?(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): boolean;

	autoCompleteSuggestionListUpdated?(autocomplete: TKAutoCompleteTextView, suggestionList: NSArray<TKAutoCompleteToken>): void;

	autoCompleteViewForToken?(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): TKAutoCompleteTokenView;

	autoCompleteWillShowSuggestionList?(autocomplete: TKAutoCompleteTextView, suggestionList: NSArray<TKAutoCompleteToken>): void;
}
declare var TKAutoCompleteDelegate: {

	prototype: TKAutoCompleteDelegate;
};

declare const enum TKAutoCompleteDisplayMode {

	Plain = 0,

	Tokens = 1
}

declare const enum TKAutoCompleteLayoutMode {

	Horizontal = 0,

	Wrap = 1
}

declare const enum TKAutoCompleteSuggestMode {

	Suggest = 0,

	Append = 1,

	SuggestAppend = 2
}

interface TKAutoCompleteSuggestViewDelegate extends NSObjectProtocol {

	selectedItem: TKAutoCompleteToken;

	hide(): void;

	populateWithItems(items: NSArray<TKAutoCompleteToken>): void;

	reloadSuggestions(): void;

	shouldAlwaysHideSuggestionView(): boolean;

	show(): void;
}
declare var TKAutoCompleteSuggestViewDelegate: {

	prototype: TKAutoCompleteSuggestViewDelegate;
};

declare class TKAutoCompleteSuggestionCell extends TKListViewCell {

	static alloc(): TKAutoCompleteSuggestionCell; // inherited from NSObject

	static appearance(): TKAutoCompleteSuggestionCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKAutoCompleteSuggestionCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKAutoCompleteSuggestionCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKAutoCompleteSuggestionCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKAutoCompleteSuggestionCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKAutoCompleteSuggestionCell; // inherited from UIAppearance

	static new(): TKAutoCompleteSuggestionCell; // inherited from NSObject
}

declare class TKAutoCompleteTextView extends TKView {

	static alloc(): TKAutoCompleteTextView; // inherited from NSObject

	static appearance(): TKAutoCompleteTextView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKAutoCompleteTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKAutoCompleteTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKAutoCompleteTextView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKAutoCompleteTextView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKAutoCompleteTextView; // inherited from UIAppearance

	static new(): TKAutoCompleteTextView; // inherited from NSObject

	allowCustomTokens: boolean;

	allowTokenHighlighting: boolean;

	autocompleteInset: number;

	readonly closeButton: UIButton;

	readonly contentView: TKView;

	readonly currentWrapHeight: number;

	dataSource: TKAutoCompleteDataSource;

	delegate: TKAutoCompleteDelegate;

	displayMode: TKAutoCompleteDisplayMode;

	readonly imageView: UIImageView;

	layoutMode: TKAutoCompleteLayoutMode;

	maximumTokensCount: number;

	maximumWrapHeight: number;

	minimumCharactersToSearch: number;

	readonly noResultsLabel: UILabel;

	readOnly: boolean;

	showAllItemsInitially: boolean;

	suggestMode: TKAutoCompleteSuggestMode;

	suggestionView: UIView;

	suggestionViewHeight: number;

	suggestionViewOutOfFrame: boolean;

	readonly textField: UITextField;

	readonly titleLabel: UILabel;

	tokenInset: number;

	tokeninzingSymbols: NSArray<string>;

	addToken(token: TKAutoCompleteToken): void;

	completeSuggestionViewPopulation(suggestions: NSArray<any>): void;

	insertTokenAtIndex(token: TKAutoCompleteToken, index: number): void;

	removeAllTokens(): void;

	removeToken(token: TKAutoCompleteToken): void;

	removeTokenAtIndex(index: number): void;

	resetAutocomplete(): void;

	resetAutocompleteState(): void;

	tokenAtIndex(index: number): TKAutoCompleteToken;

	tokens(): NSArray<any>;
}

declare class TKAutoCompleteToken extends NSObject {

	static alloc(): TKAutoCompleteToken; // inherited from NSObject

	static new(): TKAutoCompleteToken; // inherited from NSObject

	attributedText: NSAttributedString;

	image: UIImage;

	text: string;

	constructor(o: { text: string; });

	initWithText(text: string): this;
}

declare class TKAutoCompleteTokenRemoveButton extends UIButton {

	static alloc(): TKAutoCompleteTokenRemoveButton; // inherited from NSObject

	static appearance(): TKAutoCompleteTokenRemoveButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKAutoCompleteTokenRemoveButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKAutoCompleteTokenRemoveButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKAutoCompleteTokenRemoveButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKAutoCompleteTokenRemoveButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKAutoCompleteTokenRemoveButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): TKAutoCompleteTokenRemoveButton; // inherited from UIButton

	static new(): TKAutoCompleteTokenRemoveButton; // inherited from NSObject
}

declare class TKAutoCompleteTokenView extends TKView implements UIKeyInput {

	static alloc(): TKAutoCompleteTokenView; // inherited from NSObject

	static appearance(): TKAutoCompleteTokenView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKAutoCompleteTokenView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKAutoCompleteTokenView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKAutoCompleteTokenView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKAutoCompleteTokenView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKAutoCompleteTokenView; // inherited from UIAppearance

	static new(): TKAutoCompleteTokenView; // inherited from NSObject

	highlightedView: UIView;

	readonly imageView: UIImageView;

	isHighlighted: boolean;

	owner: TKAutoCompleteTextView;

	removeButton: UIButton;

	readonly textLabel: UILabel;

	token: TKAutoCompleteToken;

	tokenInset: number;

	autocapitalizationType: UITextAutocapitalizationType; // inherited from UITextInputTraits

	autocorrectionType: UITextAutocorrectionType; // inherited from UITextInputTraits

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	enablesReturnKeyAutomatically: boolean; // inherited from UITextInputTraits

	readonly hasText: boolean; // inherited from UIKeyInput

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	keyboardAppearance: UIKeyboardAppearance; // inherited from UITextInputTraits

	keyboardType: UIKeyboardType; // inherited from UITextInputTraits

	returnKeyType: UIReturnKeyType; // inherited from UITextInputTraits

	secureTextEntry: boolean; // inherited from UITextInputTraits

	spellCheckingType: UITextSpellCheckingType; // inherited from UITextInputTraits

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	textContentType: string; // inherited from UITextInputTraits

	readonly  // inherited from NSObjectProtocol

	constructor(o: { token: TKAutoCompleteToken; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteBackward(): void;

	initWithToken(token: TKAutoCompleteToken): this;

	insertText(text: string): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKBalloonShape extends TKShape {

	static alloc(): TKBalloonShape; // inherited from NSObject

	static new(): TKBalloonShape; // inherited from NSObject

	arrowOffset: number;

	arrowPosition: TKBalloonShapeArrowPosition;

	arrowSize: CGSize;

	cornerRadius: number;

	useStrictArrowPosition: boolean;

	constructor(o: { arrowPosition: TKBalloonShapeArrowPosition; size: CGSize; });

	initWithArrowPositionSize(arrowPosition: TKBalloonShapeArrowPosition, size: CGSize): this;
}

declare const enum TKBalloonShapeArrowPosition {

	None = 0,

	Left = 1,

	Right = 2,

	Top = 3,

	Bottom = 4,

	LeftTop = 5,

	LeftBottom = 6,

	RightTop = 7,

	RightBottom = 8,

	TopLeft = 9,

	TopRight = 10,

	BottomLeft = 11,

	BottomRight = 12
}

declare class TKCalendar extends TKView {

	static alloc(): TKCalendar; // inherited from NSObject

	static appearance(): TKCalendar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendar; // inherited from UIAppearance

	static dateWithYearMonthDayWithCalendar(year: number, month: number, day: number, calendar: NSCalendar): Date;

	static isDateEqualToDateWithComponentsWithCalendar(date1: Date, date2: Date, components: NSCalendarUnit, calendar: NSCalendar): boolean;

	static new(): TKCalendar; // inherited from NSObject

	allowPinchZoom: boolean;

	calendar: NSCalendar;

	dataSource: TKCalendarDataSource;

	delegate: TKCalendarDelegate;

	readonly displayedDate: Date;

	locale: NSLocale;

	maxDate: Date;

	minDate: Date;

	readonly presenter: TKCalendarPresenter;

	selectedDate: Date;

	selectedDates: NSArray<any>;

	selectedDatesRange: TKDateRange;

	selectionMode: TKCalendarSelectionMode;

	theme: TKTheme;

	viewMode: TKCalendarViewMode;

	clearSelection(): void;

	eventsForDate(date: Date): NSArray<any>;

	navigateBack(animated: boolean): void;

	navigateForward(animated: boolean): void;

	navigateToDateAnimated(date: Date, animated: boolean): void;

	reloadData(): void;
}

declare class TKCalendarCell extends UIView {

	static alloc(): TKCalendarCell; // inherited from NSObject

	static appearance(): TKCalendarCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarCell; // inherited from UIAppearance

	static new(): TKCalendarCell; // inherited from NSObject

	readonly label: UILabel;

	owner: TKCalendar;

	applyStyleForState(state: number): void;

	style(): TKCalendarCellStyle;

	updateVisuals(): void;
}

declare const enum TKCalendarCellAlignment {

	Left = 1,

	Right = 2,

	Top = 4,

	Bottom = 8,

	HorizontalCenter = 16,

	VerticalCenter = 32
}

declare class TKCalendarCellStyle extends TKStyleNode {

	static alloc(): TKCalendarCellStyle; // inherited from NSObject

	static new(): TKCalendarCellStyle; // inherited from NSObject

	backgroundColor: UIColor;

	bottomBorderColor: UIColor;

	bottomBorderWidth: number;

	leftBorderColor: UIColor;

	leftBorderWidth: number;

	rightBorderColor: UIColor;

	rightBorderWidth: number;

	shape: TKShape;

	shapeFill: TKFill;

	shapeStroke: TKStroke;

	textAlignment: TKCalendarCellAlignment;

	textColor: UIColor;

	textFont: UIFont;

	textInsets: UIEdgeInsets;

	topBorderColor: UIColor;

	topBorderWidth: number;
}

declare const enum TKCalendarCellType {

	Day = 0,

	DayName = 1,

	WeekNumber = 2,

	Title = 3,

	MonthName = 4,

	YearNumber = 5
}

interface TKCalendarDataSource extends NSObjectProtocol {

	calendarEventsForDate?(calendar: TKCalendar, date: Date): NSArray<any>;

	calendarEventsFromDateToDateWithCallback?(calendar: TKCalendar, startDate: Date, endDate: Date, eventsCallback: (p1: NSArray<any>) => void): void;
}
declare var TKCalendarDataSource: {

	prototype: TKCalendarDataSource;
};

declare class TKCalendarDayCell extends TKCalendarCell {

	static alloc(): TKCalendarDayCell; // inherited from NSObject

	static appearance(): TKCalendarDayCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarDayCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarDayCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarDayCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarDayCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarDayCell; // inherited from UIAppearance

	static new(): TKCalendarDayCell; // inherited from NSObject

	readonly date: Date;

	readonly events: NSArray<any>;

	state: TKCalendarDayState;

	attachWithCalendarWithDate(owner: TKCalendar, date: Date): void;

	drawEventsRect(context: any, rect: CGRect): void;

	stateForDate(date: Date): TKCalendarDayState;

	style(): TKCalendarDayCellStyle;

	textAttributesForEvent(event: TKCalendarEventProtocol): NSDictionary<any, any>;

	textForEvent(event: TKCalendarEventProtocol): string;
}

declare const enum TKCalendarDayCellEventOrientation {

	Horizontal = 1,

	Vertical = 2
}

declare class TKCalendarDayCellStyle extends TKCalendarCellStyle {

	static alloc(): TKCalendarDayCellStyle; // inherited from NSObject

	static new(): TKCalendarDayCellStyle; // inherited from NSObject

	allDayEventTextColor: UIColor;

	defaultSelectionColor: UIColor;

	displayEventsAsText: boolean;

	eventAlignment: TKCalendarCellAlignment;

	eventFont: UIFont;

	eventInsets: UIEdgeInsets;

	eventOrientation: TKCalendarDayCellEventOrientation;

	eventShape: TKShape;

	eventSpacing: number;

	eventTextColor: UIColor;

	maxEventsCount: number;

	stretchEvents: boolean;

	useDefaultSelectionStyle: boolean;

	wrapEventText: boolean;
}

declare class TKCalendarDayNameCell extends TKCalendarCell {

	static alloc(): TKCalendarDayNameCell; // inherited from NSObject

	static appearance(): TKCalendarDayNameCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarDayNameCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarDayNameCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarDayNameCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarDayNameCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarDayNameCell; // inherited from UIAppearance

	static new(): TKCalendarDayNameCell; // inherited from NSObject

	attachWithCalendarWithDayOffset(owner: TKCalendar, index: number): void;
}

declare const enum TKCalendarDayState {

	Today = 1,

	Weekend = 2,

	CurrentMonth = 4,

	CurrentYear = 8,

	Selected = 16,

	FirstInSelection = 32,

	LastInSelection = 64,

	MidInSelection = 128,

	Disabled = 256
}

declare class TKCalendarDayView extends UIView implements UICollectionViewDataSource, UICollectionViewDelegateFlowLayout {

	static alloc(): TKCalendarDayView; // inherited from NSObject

	static appearance(): TKCalendarDayView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarDayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarDayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarDayView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarDayView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarDayView; // inherited from UIAppearance

	static new(): TKCalendarDayView; // inherited from NSObject

	readonly allDayEvents: NSArray<TKCalendarEventProtocol>;

	readonly allDayEventsView: TKCalendarDayViewAllDayEventsView;

	readonly calendar: NSCalendar;

	dataSource: TKCalendarDayViewDataSource;

	readonly date: Date;

	delegate: TKCalendarDayViewDelegate;

	readonly emptyView: UIView;

	readonly events: NSArray<TKCalendarEventProtocol>;

	readonly eventsView: TKCalendarDayViewEventsView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	attachWithEventsForDateWithCalendar(events: NSArray<TKCalendarEventProtocol>, date: Date, calendar: NSCalendar): void;

	class(): typeof NSObject;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewLayoutInsetForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets;

	collectionViewLayoutMinimumInteritemSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutMinimumLineSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutReferenceSizeForFooterInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutReferenceSizeForHeaderInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class TKCalendarDayViewAllDayEventCell extends UICollectionViewCell implements TKCalendarDayViewEventCellProtocol {

	static alloc(): TKCalendarDayViewAllDayEventCell; // inherited from NSObject

	static appearance(): TKCalendarDayViewAllDayEventCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarDayViewAllDayEventCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarDayViewAllDayEventCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarDayViewAllDayEventCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarDayViewAllDayEventCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarDayViewAllDayEventCell; // inherited from UIAppearance

	static new(): TKCalendarDayViewAllDayEventCell; // inherited from NSObject

	readonly label: UILabel;

	readonly style: TKCalendarDayViewAllDayEventCellStyle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly event: TKCalendarEventProtocol; // inherited from TKCalendarDayViewEventCellProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	attachWithEvent(event: TKCalendarEventProtocol): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKCalendarDayViewAllDayEventCellStyle extends TKStyleNode {

	static alloc(): TKCalendarDayViewAllDayEventCellStyle; // inherited from NSObject

	static new(): TKCalendarDayViewAllDayEventCellStyle; // inherited from NSObject

	backgroundColor: UIColor;

	textColor: UIColor;

	textFont: UIFont;

	textInsets: UIEdgeInsets;
}

declare class TKCalendarDayViewAllDayEventsView extends UIView {

	static alloc(): TKCalendarDayViewAllDayEventsView; // inherited from NSObject

	static appearance(): TKCalendarDayViewAllDayEventsView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarDayViewAllDayEventsView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarDayViewAllDayEventsView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarDayViewAllDayEventsView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarDayViewAllDayEventsView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarDayViewAllDayEventsView; // inherited from UIAppearance

	static new(): TKCalendarDayViewAllDayEventsView; // inherited from NSObject

	readonly date: Date;

	readonly events: NSArray<TKCalendarEventProtocol>;

	readonly eventsView: UICollectionView;

	readonly labelView: UIView;

	readonly style: TKCalendarDayViewAllDayEventsViewStyle;

	attachWithEventsForDate(events: NSArray<TKCalendarEventProtocol>, date: Date): void;

	createEventsView(): UICollectionView;

	createLabelView(): UIView;

	updateLayout(): void;
}

declare class TKCalendarDayViewAllDayEventsViewStyle extends TKStyleNode {

	static alloc(): TKCalendarDayViewAllDayEventsViewStyle; // inherited from NSObject

	static new(): TKCalendarDayViewAllDayEventsViewStyle; // inherited from NSObject

	eventHeight: number;

	eventsPerRow: number;

	eventsViewInsets: UIEdgeInsets;

	itemSpacing: number;

	labelInsets: UIEdgeInsets;

	labelWidth: number;

	lineSpacing: number;

	maxVisibleLines: number;
}

interface TKCalendarDayViewDataSource extends NSObjectProtocol {

	createAllDayEventsViewInDayView(dayView: TKCalendarDayView): TKCalendarDayViewAllDayEventsView;

	createEventsViewInDayView(dayView: TKCalendarDayView): TKCalendarDayViewEventsView;

	dayViewAllDayEventCellForItemAtIndexPath(dayView: TKCalendarDayView, indexPath: NSIndexPath): UICollectionViewCell;

	dayViewEventCellForItemAtIndexPath(dayView: TKCalendarDayView, indexPath: NSIndexPath): UICollectionViewCell;

	dayViewNumberOfAllDayEventsInSection(dayView: TKCalendarDayView, section: number): number;

	dayViewNumberOfEventsInSection(dayView: TKCalendarDayView, section: number): number;

	dayViewUpdateCell(dayView: TKCalendarDayView, cell: UICollectionViewCell): void;
}
declare var TKCalendarDayViewDataSource: {

	prototype: TKCalendarDayViewDataSource;
};

interface TKCalendarDayViewDelegate extends NSObjectProtocol {

	allDayViewSizeInDayView(dayView: TKCalendarDayView): CGSize;

	dayViewAllDaylayoutInsetForSectionAtIndex(dayView: TKCalendarDayView, layout: UICollectionViewLayout, section: number): UIEdgeInsets;

	dayViewAllDaylayoutMinimumInteritemSpacingForSectionAtIndex(dayView: TKCalendarDayView, layout: UICollectionViewLayout, section: number): number;

	dayViewAllDaylayoutMinimumLineSpacingForSectionAtIndex(dayView: TKCalendarDayView, layout: UICollectionViewLayout, section: number): number;

	dayViewAllDaylayoutSizeForItemAtIndexPath(dayView: TKCalendarDayView, layout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize;

	dayViewDidSelectEvent(dayView: TKCalendarDayView, event: TKCalendarEventProtocol): void;
}
declare var TKCalendarDayViewDelegate: {

	prototype: TKCalendarDayViewDelegate;
};

declare class TKCalendarDayViewEventCell extends UICollectionViewCell implements TKCalendarDayViewEventCellProtocol {

	static alloc(): TKCalendarDayViewEventCell; // inherited from NSObject

	static appearance(): TKCalendarDayViewEventCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarDayViewEventCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarDayViewEventCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarDayViewEventCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarDayViewEventCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarDayViewEventCell; // inherited from UIAppearance

	static new(): TKCalendarDayViewEventCell; // inherited from NSObject

	readonly style: TKCalendarDayViewEventCellStyle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly event: TKCalendarEventProtocol; // inherited from TKCalendarDayViewEventCellProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	attachWithEvent(event: TKCalendarEventProtocol): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface TKCalendarDayViewEventCellProtocol extends NSObjectProtocol {

	event: TKCalendarEventProtocol;

	attachWithEvent(event: TKCalendarEventProtocol): void;
}
declare var TKCalendarDayViewEventCellProtocol: {

	prototype: TKCalendarDayViewEventCellProtocol;
};

declare class TKCalendarDayViewEventCellStyle extends TKStyleNode {

	static alloc(): TKCalendarDayViewEventCellStyle; // inherited from NSObject

	static new(): TKCalendarDayViewEventCellStyle; // inherited from NSObject

	decorationWidth: number;

	detailFont: UIFont;

	detailInsets: UIEdgeInsets;

	detailNumberOfLines: number;

	insets: UIEdgeInsets;

	textColor: UIColor;

	titleFont: UIFont;

	titleInsets: UIEdgeInsets;

	titleNumberOfLines: number;

	transparency: number;
}

declare class TKCalendarDayViewEventsLayout extends UICollectionViewLayout {

	static alloc(): TKCalendarDayViewEventsLayout; // inherited from NSObject

	static new(): TKCalendarDayViewEventsLayout; // inherited from NSObject
}

declare class TKCalendarDayViewEventsView extends UICollectionView {

	static alloc(): TKCalendarDayViewEventsView; // inherited from NSObject

	static appearance(): TKCalendarDayViewEventsView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarDayViewEventsView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarDayViewEventsView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarDayViewEventsView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarDayViewEventsView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarDayViewEventsView; // inherited from UIAppearance

	static new(): TKCalendarDayViewEventsView; // inherited from NSObject

	allowZoom: boolean;

	readonly calendar: NSCalendar;

	readonly date: Date;

	endTime: number;

	readonly events: NSArray<TKCalendarEventProtocol>;

	interval: number;

	maxZoom: number;

	minZoom: number;

	startTime: number;

	readonly style: TKCalendarDayViewEventsViewStyle;

	zoom: number;

	attachWithEventsForDateWithCalendar(events: NSArray<TKCalendarEventProtocol>, date: Date, calendar: NSCalendar): void;

	labelForTimeInterval(interval: number): string;

	labelSize(): CGSize;

	labels(): NSArray<NSAttributedString>;

	offsetForComponents(components: NSDateComponents): number;

	offsetForHourMinuteSecond(hour: number, minute: number, second: number): number;

	slotsCount(): number;

	timeLineHeight(): number;

	updateLayout(): void;
}

declare class TKCalendarDayViewEventsViewStyle extends TKStyleNode {

	static alloc(): TKCalendarDayViewEventsViewStyle; // inherited from NSObject

	static new(): TKCalendarDayViewEventsViewStyle; // inherited from NSObject

	bottomOffset: number;

	eventsLeadingOffset: number;

	eventsSpacing: number;

	eventsTrailingOffset: number;

	labelFormatter: NSDateFormatter;

	labelOffset: number;

	labelTextAlignment: NSTextAlignment;

	labelTextColor: UIColor;

	labelTextSize: number;

	minEventHeight: number;

	separatorColor: UIColor;

	separatorLeadingOffset: number;

	separatorSpacing: number;

	separatorTrailingOffset: number;

	separatorWidth: number;

	topOffset: number;
}

declare class TKCalendarDayViewPresenter extends TKCalendarPresenterBase {

	static alloc(): TKCalendarDayViewPresenter; // inherited from NSObject

	static appearance(): TKCalendarDayViewPresenter; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarDayViewPresenter; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarDayViewPresenter; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarDayViewPresenter; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarDayViewPresenter; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarDayViewPresenter; // inherited from UIAppearance

	static new(): TKCalendarDayViewPresenter; // inherited from NSObject

	dayNamesHidden: boolean;

	readonly dayNamesView: UIView;

	readonly dayView: TKCalendarDayView;

	readonly owner: TKCalendar;

	readonly style: TKCalendarDayViewPresenterStyle;

	titleHidden: boolean;

	readonly titleView: UIView;

	weekHidden: boolean;

	weekNumbersHidden: boolean;

	readonly weekView: UIView;

	weekendsHidden: boolean;

	cellForDate(date: Date): TKCalendarDayCell;

	createCellWithType(cellType: TKCalendarCellType): TKCalendarCell;
}

declare class TKCalendarDayViewPresenterStyle extends TKStyleNode {

	static alloc(): TKCalendarDayViewPresenterStyle; // inherited from NSObject

	static new(): TKCalendarDayViewPresenterStyle; // inherited from NSObject

	backgroundColor: UIColor;

	columnSpacing: number;

	dayCellHeight: number;

	dayNameCellHeight: number;

	dayNameTextEffect: TKCalendarTextEffect;

	titleCellHeight: number;

	weekNumberCellWidth: number;
}

declare class TKCalendarDayViewTimeLine extends UICollectionReusableView {

	static alloc(): TKCalendarDayViewTimeLine; // inherited from NSObject

	static appearance(): TKCalendarDayViewTimeLine; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarDayViewTimeLine; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarDayViewTimeLine; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarDayViewTimeLine; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarDayViewTimeLine; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarDayViewTimeLine; // inherited from UIAppearance

	static new(): TKCalendarDayViewTimeLine; // inherited from NSObject

	readonly owner: TKCalendarDayViewEventsView;
}

declare class TKCalendarDayViewTimeLineLayoutAttributes extends UICollectionViewLayoutAttributes {

	static alloc(): TKCalendarDayViewTimeLineLayoutAttributes; // inherited from NSObject

	static layoutAttributesForCellWithIndexPath(indexPath: NSIndexPath): TKCalendarDayViewTimeLineLayoutAttributes; // inherited from UICollectionViewLayoutAttributes

	static layoutAttributesForDecorationViewOfKindWithIndexPath(decorationViewKind: string, indexPath: NSIndexPath): TKCalendarDayViewTimeLineLayoutAttributes; // inherited from UICollectionViewLayoutAttributes

	static layoutAttributesForDecorationViewOfKindWithIndexPathWithOwner(decorationViewKind: string, indexPath: NSIndexPath, owner: TKCalendarDayViewEventsView): TKCalendarDayViewTimeLineLayoutAttributes;

	static layoutAttributesForSupplementaryViewOfKindWithIndexPath(elementKind: string, indexPath: NSIndexPath): TKCalendarDayViewTimeLineLayoutAttributes; // inherited from UICollectionViewLayoutAttributes

	static new(): TKCalendarDayViewTimeLineLayoutAttributes; // inherited from NSObject

	readonly owner: TKCalendarDayViewEventsView;
}

declare class TKCalendarDefaultTheme extends TKTheme {

	static alloc(): TKCalendarDefaultTheme; // inherited from NSObject

	static new(): TKCalendarDefaultTheme; // inherited from NSObject
}

interface TKCalendarDelegate extends NSObjectProtocol {

	calendarDidChangedViewModeFromTo?(calendar: TKCalendar, previousViewMode: TKCalendarViewMode, viewMode: TKCalendarViewMode): void;

	calendarDidDeselectedDate?(calendar: TKCalendar, date: Date): void;

	calendarDidNavigateToDate?(calendar: TKCalendar, date: Date): void;

	calendarDidSelectDate?(calendar: TKCalendar, date: Date): void;

	calendarDidTapCell?(calendar: TKCalendar, cell: TKCalendarDayCell): void;

	calendarShapeForEvent?(calendar: TKCalendar, event: TKCalendarEventProtocol): TKShape;

	calendarShouldSelectDate?(calendar: TKCalendar, date: Date): boolean;

	calendarTextForEvent?(calendar: TKCalendar, event: TKCalendarEventProtocol): string;

	calendarUpdateVisualsForCell?(calendar: TKCalendar, cell: TKCalendarCell): void;

	calendarViewForCellOfKind?(calendar: TKCalendar, cellType: TKCalendarCellType): TKCalendarCell;

	calendarWillNavigateToDate?(calendar: TKCalendar, date: Date): void;
}
declare var TKCalendarDelegate: {

	prototype: TKCalendarDelegate;
};

declare class TKCalendarEvent extends NSObject implements TKCalendarEventProtocol {

	static alloc(): TKCalendarEvent; // inherited from NSObject

	static new(): TKCalendarEvent; // inherited from NSObject

	content: string;

	location: string;

	allDay: boolean; // inherited from TKCalendarEventProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	detail: string; // inherited from TKCalendarEventProtocol

	endDate: Date; // inherited from TKCalendarEventProtocol

	eventColor: UIColor; // inherited from TKCalendarEventProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	startDate: Date; // inherited from TKCalendarEventProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	title: string; // inherited from TKCalendarEventProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKCalendarEventKitDataSource extends NSObject implements TKCalendarDataSource {

	static alloc(): TKCalendarEventKitDataSource; // inherited from NSObject

	static new(): TKCalendarEventKitDataSource; // inherited from NSObject

	readonly calendars: NSArray<any>;

	delegate: TKCalendarEventKitDataSourceDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	calendarEventsForDate(calendar: TKCalendar, date: Date): NSArray<any>;

	calendarEventsFromDateToDateWithCallback(calendar: TKCalendar, startDate: Date, endDate: Date, eventsCallback: (p1: NSArray<any>) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createCalendarEventInCalendar(event: EKEvent, calendar: EKCalendar): TKCalendarEventProtocol;

	getCalendarsWithBlock(callbackBlock: (p1: NSArray<any>) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface TKCalendarEventKitDataSourceDelegate extends NSObjectProtocol {

	shouldImportEvent?(event: EKEvent): boolean;

	shouldImportEventsFromCalendar?(calendar: EKCalendar): boolean;
}
declare var TKCalendarEventKitDataSourceDelegate: {

	prototype: TKCalendarEventKitDataSourceDelegate;
};

interface TKCalendarEventProtocol extends NSObjectProtocol {

	allDay: boolean;

	detail: string;

	endDate: Date;

	eventColor: UIColor;

	startDate: Date;

	title: string;
}
declare var TKCalendarEventProtocol: {

	prototype: TKCalendarEventProtocol;
};

declare class TKCalendarFlowPresenter extends UIView implements TKCalendarPresenter {

	static alloc(): TKCalendarFlowPresenter; // inherited from NSObject

	static appearance(): TKCalendarFlowPresenter; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarFlowPresenter; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarFlowPresenter; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarFlowPresenter; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarFlowPresenter; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarFlowPresenter; // inherited from UIAppearance

	static new(): TKCalendarFlowPresenter; // inherited from NSObject

	readonly collectionView: UICollectionView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dateFromPoint(pt: CGPoint): Date;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	navigateBack(animated: boolean): boolean;

	navigateForward(animated: boolean): boolean;

	navigateToDateAnimated(date: Date, animated: boolean): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	update(reset: boolean): void;

	updateState(lastSelected: Date): void;
}

declare class TKCalendarIPadTheme extends TKTheme {

	static alloc(): TKCalendarIPadTheme; // inherited from NSObject

	static new(): TKCalendarIPadTheme; // inherited from NSObject
}

declare const enum TKCalendarInlineEventsViewMode {

	None = 0,

	Inline = 1,

	Popover = 2
}

declare class TKCalendarInlineView extends TKView implements UITableViewDataSource, UITableViewDelegate {

	static alloc(): TKCalendarInlineView; // inherited from NSObject

	static appearance(): TKCalendarInlineView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarInlineView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarInlineView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarInlineView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarInlineView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarInlineView; // inherited from UIAppearance

	static new(): TKCalendarInlineView; // inherited from NSObject

	dayCell: TKCalendarDayCell;

	desiredWidthInPopoverMode: number;

	fixedHeight: boolean;

	maxHeight: number;

	owner: TKCalendarMonthPresenter;

	rowHeight: number;

	readonly tableView: UITableView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class TKCalendarInlineViewTableViewCell extends UITableViewCell {

	static alloc(): TKCalendarInlineViewTableViewCell; // inherited from NSObject

	static appearance(): TKCalendarInlineViewTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarInlineViewTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarInlineViewTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarInlineViewTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarInlineViewTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarInlineViewTableViewCell; // inherited from UIAppearance

	static new(): TKCalendarInlineViewTableViewCell; // inherited from NSObject

	readonly style: TKCalendarInlineViewTableViewCellStyle;

	attachWithCellEventIndex(cell: TKCalendarDayCell, index: number): void;

	updateTextForEventWithCell(event: TKCalendarEventProtocol, cell: TKCalendarDayCell): void;
}

declare class TKCalendarInlineViewTableViewCellStyle extends TKStyleNode {

	static alloc(): TKCalendarInlineViewTableViewCellStyle; // inherited from NSObject

	static new(): TKCalendarInlineViewTableViewCellStyle; // inherited from NSObject

	backgroundColor: UIColor;

	eventColor: UIColor;

	eventFont: UIFont;

	separatorColor: UIColor;

	shapeSize: CGSize;

	timeColor: UIColor;

	timeFont: UIFont;
}

declare class TKCalendarMonthCell extends UICollectionViewCell {

	static alloc(): TKCalendarMonthCell; // inherited from NSObject

	static appearance(): TKCalendarMonthCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarMonthCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarMonthCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarMonthCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarMonthCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarMonthCell; // inherited from UIAppearance

	static new(): TKCalendarMonthCell; // inherited from NSObject

	readonly monthView: TKCalendarMonthView;

	attachWithCalendarPresenterWithYearAndMonth(owner: TKCalendar, presenter: TKCalendarYearPresenter, year: number, month: number): void;
}

declare class TKCalendarMonthNameCell extends TKCalendarCell {

	static alloc(): TKCalendarMonthNameCell; // inherited from NSObject

	static appearance(): TKCalendarMonthNameCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarMonthNameCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarMonthNameCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarMonthNameCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarMonthNameCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarMonthNameCell; // inherited from UIAppearance

	static new(): TKCalendarMonthNameCell; // inherited from NSObject

	readonly date: Date;

	state: TKCalendarMonthNameState;

	attachWithCalendarWithDate(owner: TKCalendar, date: Date): void;
}

declare const enum TKCalendarMonthNameState {

	Selected = 1,

	Disabled = 2
}

declare class TKCalendarMonthNamesPresenter extends TKCalendarPresenterBase {

	static alloc(): TKCalendarMonthNamesPresenter; // inherited from NSObject

	static appearance(): TKCalendarMonthNamesPresenter; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarMonthNamesPresenter; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarMonthNamesPresenter; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarMonthNamesPresenter; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarMonthNamesPresenter; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarMonthNamesPresenter; // inherited from UIAppearance

	static new(): TKCalendarMonthNamesPresenter; // inherited from NSObject

	columns: number;

	readonly contentView: UIView;
}

declare class TKCalendarMonthPresenter extends TKCalendarPresenterBase {

	static alloc(): TKCalendarMonthPresenter; // inherited from NSObject

	static appearance(): TKCalendarMonthPresenter; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarMonthPresenter; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarMonthPresenter; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarMonthPresenter; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarMonthPresenter; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarMonthPresenter; // inherited from UIAppearance

	static new(): TKCalendarMonthPresenter; // inherited from NSObject

	readonly contentView: UIView;

	dayNamesHidden: boolean;

	equalWeekNumber: boolean;

	headerIsSticky: boolean;

	readonly headerView: UIView;

	inlineEventsView: TKCalendarInlineView;

	inlineEventsViewMode: TKCalendarInlineEventsViewMode;

	readonly owner: TKCalendar;

	readonly style: TKCalendarMonthPresenterStyle;

	titleHidden: boolean;

	weekNumbersHidden: boolean;

	weekendsHidden: boolean;

	cellForDate(date: Date): TKCalendarDayCell;

	createCellWithType(cellType: TKCalendarCellType): TKCalendarCell;

	dateForRowCol(row: number, col: number): Date;

	hideInlineEvents(animated: boolean): void;

	showInlineEventsForCellAnimated(cell: TKCalendarDayCell, animated: boolean): void;

	updateInlineView(): void;
}

interface TKCalendarMonthPresenterDelegate extends TKCalendarPresenterDelegate {

	monthPresenterInlineEventSelected?(presenter: TKCalendarMonthPresenter, event: TKCalendarEventProtocol): void;

	monthPresenterInlineEventsViewDidHideForCell?(presenter: TKCalendarMonthPresenter, cell: TKCalendarDayCell): void;

	monthPresenterInlineEventsViewDidShowForCell?(presenter: TKCalendarMonthPresenter, cell: TKCalendarDayCell): void;

	monthPresenterUpdateVisualsForInlineEventCell?(presenter: TKCalendarMonthPresenter, cell: TKCalendarInlineViewTableViewCell): void;
}
declare var TKCalendarMonthPresenterDelegate: {

	prototype: TKCalendarMonthPresenterDelegate;
};

declare class TKCalendarMonthPresenterStyle extends TKStyleNode {

	static alloc(): TKCalendarMonthPresenterStyle; // inherited from NSObject

	static new(): TKCalendarMonthPresenterStyle; // inherited from NSObject

	backgroundColor: UIColor;

	columnSpacing: number;

	dayNameCellHeight: number;

	dayNameTextEffect: TKCalendarTextEffect;

	monthNameTextEffect: TKCalendarTextEffect;

	popoverColor: UIColor;

	rowSpacing: number;

	titleCellHeight: number;

	weekNumberCellWidth: number;
}

declare class TKCalendarMonthTitleCell extends TKCalendarTitleCell {

	static alloc(): TKCalendarMonthTitleCell; // inherited from NSObject

	static appearance(): TKCalendarMonthTitleCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarMonthTitleCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarMonthTitleCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarMonthTitleCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarMonthTitleCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarMonthTitleCell; // inherited from UIAppearance

	static new(): TKCalendarMonthTitleCell; // inherited from NSObject

	layoutMode: TKCalendarMonthTitleCellLayoutMode;

	nextMonthButton: UIButton;

	nextYearButton: UIButton;

	previousMonthButton: UIButton;

	previousYearButton: UIButton;

	readonly yearLabel: UILabel;
}

declare const enum TKCalendarMonthTitleCellLayoutMode {

	Month = 0,

	MonthWithButtons = 1,

	MonthAndYearWithButtons = 2
}

declare class TKCalendarMonthView extends UIView {

	static alloc(): TKCalendarMonthView; // inherited from NSObject

	static appearance(): TKCalendarMonthView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarMonthView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarMonthView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarMonthView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarMonthView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarMonthView; // inherited from UIAppearance

	static new(): TKCalendarMonthView; // inherited from NSObject

	readonly date: Date;

	attachWithCalendarPresenterWithYearAndMonth(owner: TKCalendar, presenter: TKCalendarYearPresenter, year: number, month: number): void;
}

declare class TKCalendarMonthViewController extends UIViewController {

	static alloc(): TKCalendarMonthViewController; // inherited from NSObject

	static new(): TKCalendarMonthViewController; // inherited from NSObject

	readonly contentView: TKCalendar;

	readonly todayButton: UIBarButtonItem;
}

declare class TKCalendarNavigationController extends UINavigationController {

	static alloc(): TKCalendarNavigationController; // inherited from NSObject

	static new(): TKCalendarNavigationController; // inherited from NSObject
}

interface TKCalendarPresenter extends NSObjectProtocol {

	dateFromPoint(pt: CGPoint): Date;

	navigateBack(animated: boolean): boolean;

	navigateForward(animated: boolean): boolean;

	navigateToDateAnimated(date: Date, animated: boolean): void;

	update(reset: boolean): void;

	updateState(lastSelected: Date): void;
}
declare var TKCalendarPresenter: {

	prototype: TKCalendarPresenter;
};

declare class TKCalendarPresenterBase extends UIView implements TKCalendarPresenter {

	static alloc(): TKCalendarPresenterBase; // inherited from NSObject

	static appearance(): TKCalendarPresenterBase; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarPresenterBase; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarPresenterBase; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarPresenterBase; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarPresenterBase; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarPresenterBase; // inherited from UIAppearance

	static new(): TKCalendarPresenterBase; // inherited from NSObject

	delegate: TKCalendarPresenterDelegate;

	panGestureSensitivity: number;

	transitionDuration: number;

	transitionIsReverse: boolean;

	transitionIsVertical: boolean;

	transitionMode: TKCalendarTransitionMode;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dateFromPoint(pt: CGPoint): Date;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	navigateBack(animated: boolean): boolean;

	navigateForward(animated: boolean): boolean;

	navigateToDateAnimated(date: Date, animated: boolean): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	update(reset: boolean): void;

	updateState(lastSelected: Date): void;
}

interface TKCalendarPresenterDelegate extends NSObjectProtocol {

	presenterBeginTransition?(presenter: TKCalendarPresenter, transition: TKViewTransition): void;

	presenterFinishTransitionIsCanceled?(presenter: TKCalendarPresenter, transition: TKViewTransition, canceled: boolean): void;
}
declare var TKCalendarPresenterDelegate: {

	prototype: TKCalendarPresenterDelegate;
};

declare const enum TKCalendarSelectionMode {

	None = 0,

	Single = 1,

	Multiple = 2,

	Range = 3
}

declare const enum TKCalendarTextEffect {

	None = 0,

	Uppercase = 1,

	Lowercase = 2
}

declare class TKCalendarTitleCell extends TKCalendarCell {

	static alloc(): TKCalendarTitleCell; // inherited from NSObject

	static appearance(): TKCalendarTitleCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarTitleCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarTitleCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarTitleCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarTitleCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarTitleCell; // inherited from UIAppearance

	static new(): TKCalendarTitleCell; // inherited from NSObject

	attachWithCalendarWithText(owner: TKCalendar, text: string): void;
}

declare const enum TKCalendarTransitionMode {

	None = 0,

	Flip = 1,

	Fold = 2,

	Float = 3,

	Card = 4,

	Rotate = 5,

	Scroll = 6
}

declare const enum TKCalendarViewMode {

	Week = 0,

	Month = 1,

	MonthNames = 2,

	Year = 3,

	YearNumbers = 4,

	Flow = 5,

	Day = 6
}

declare class TKCalendarWeekNumberCell extends TKCalendarCell {

	static alloc(): TKCalendarWeekNumberCell; // inherited from NSObject

	static appearance(): TKCalendarWeekNumberCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarWeekNumberCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarWeekNumberCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarWeekNumberCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarWeekNumberCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarWeekNumberCell; // inherited from UIAppearance

	static new(): TKCalendarWeekNumberCell; // inherited from NSObject

	attachWithCalendarWithWeekNumber(owner: TKCalendar, weekNumber: number): void;
}

declare class TKCalendarWeekPresenter extends TKCalendarMonthPresenter {

	static alloc(): TKCalendarWeekPresenter; // inherited from NSObject

	static appearance(): TKCalendarWeekPresenter; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarWeekPresenter; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarWeekPresenter; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarWeekPresenter; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarWeekPresenter; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarWeekPresenter; // inherited from UIAppearance

	static new(): TKCalendarWeekPresenter; // inherited from NSObject
}

declare class TKCalendarYearNumberCell extends TKCalendarCell {

	static alloc(): TKCalendarYearNumberCell; // inherited from NSObject

	static appearance(): TKCalendarYearNumberCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarYearNumberCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarYearNumberCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarYearNumberCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarYearNumberCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarYearNumberCell; // inherited from UIAppearance

	static new(): TKCalendarYearNumberCell; // inherited from NSObject

	readonly date: Date;

	state: TKCalendarYearNumberState;

	attachWithCalendarWithDate(owner: TKCalendar, date: Date): void;
}

declare const enum TKCalendarYearNumberState {

	Selected = 1,

	Disabled = 2
}

declare class TKCalendarYearNumbersPresenter extends TKCalendarPresenterBase {

	static alloc(): TKCalendarYearNumbersPresenter; // inherited from NSObject

	static appearance(): TKCalendarYearNumbersPresenter; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarYearNumbersPresenter; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarYearNumbersPresenter; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarYearNumbersPresenter; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarYearNumbersPresenter; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarYearNumbersPresenter; // inherited from UIAppearance

	static new(): TKCalendarYearNumbersPresenter; // inherited from NSObject

	columns: number;

	rows: number;
}

declare class TKCalendarYearPresenter extends UIView implements TKCalendarPresenter {

	static alloc(): TKCalendarYearPresenter; // inherited from NSObject

	static appearance(): TKCalendarYearPresenter; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarYearPresenter; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarYearPresenter; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarYearPresenter; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarYearPresenter; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarYearPresenter; // inherited from UIAppearance

	static new(): TKCalendarYearPresenter; // inherited from NSObject

	readonly collectionView: UICollectionView;

	columns: number;

	delegate: TKCalendarYearPresenterDelegate;

	monthCellClass: typeof NSObject;

	readonly style: TKCalendarYearPresenterStyle;

	titleViewClass: typeof NSObject;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dateFromPoint(pt: CGPoint): Date;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	navigateBack(animated: boolean): boolean;

	navigateForward(animated: boolean): boolean;

	navigateToDateAnimated(date: Date, animated: boolean): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	update(reset: boolean): void;

	updateState(lastSelected: Date): void;
}

interface TKCalendarYearPresenterDelegate extends NSObjectProtocol {

	calendarDrawBackgroundForYearMonthDateInRect?(calendar: TKCalendar, year: number, month: number, date: number, rect: CGRect): void;

	calendarTextAttributesForYearMonthDate?(calendar: TKCalendar, year: number, month: number, date: number): NSDictionary<any, any>;

	calendarYearPresenterTextForYearMonth?(calendar: TKCalendar, presenter: TKCalendarYearPresenter, year: number, month: number): string;
}
declare var TKCalendarYearPresenterDelegate: {

	prototype: TKCalendarYearPresenterDelegate;
};

declare class TKCalendarYearPresenterStyle extends TKStyleNode {

	static alloc(): TKCalendarYearPresenterStyle; // inherited from NSObject

	static new(): TKCalendarYearPresenterStyle; // inherited from NSObject

	dayFont: UIFont;

	dayNameFont: UIFont;

	dayNameTextColor: UIColor;

	dayNameTextEffect: TKCalendarTextEffect;

	dayTextColor: UIColor;

	monthNameFont: UIFont;

	monthNameTextAlignment: NSTextAlignment;

	monthNameTextColor: UIColor;

	monthNameTextEffect: TKCalendarTextEffect;

	monthsPerPage: number;

	todayShape: TKShape;

	todayShapeFill: TKFill;

	todayShapeStroke: TKStroke;

	todayTextColor: UIColor;

	weekendTextColor: UIColor;
}

declare class TKCalendarYearTitleView extends UICollectionReusableView {

	static alloc(): TKCalendarYearTitleView; // inherited from NSObject

	static appearance(): TKCalendarYearTitleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCalendarYearTitleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCalendarYearTitleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCalendarYearTitleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCalendarYearTitleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCalendarYearTitleView; // inherited from UIAppearance

	static new(): TKCalendarYearTitleView; // inherited from NSObject

	readonly view: TKCalendarTitleCell;

	attachWithCalendarWithText(owner: TKCalendar, text: string): void;
}

declare class TKCalendarYearViewController extends UIViewController implements TKCalendarDelegate {

	static alloc(): TKCalendarYearViewController; // inherited from NSObject

	static new(): TKCalendarYearViewController; // inherited from NSObject

	readonly contentView: TKCalendar;

	delegate: TKCalendarYearViewControllerDelegate;

	readonly selectedItemRect: CGRect;

	readonly todayButton: UIBarButtonItem;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	calendarDidChangedViewModeFromTo(calendar: TKCalendar, previousViewMode: TKCalendarViewMode, viewMode: TKCalendarViewMode): void;

	calendarDidDeselectedDate(calendar: TKCalendar, date: Date): void;

	calendarDidNavigateToDate(calendar: TKCalendar, date: Date): void;

	calendarDidSelectDate(calendar: TKCalendar, date: Date): void;

	calendarDidTapCell(calendar: TKCalendar, cell: TKCalendarDayCell): void;

	calendarShapeForEvent(calendar: TKCalendar, event: TKCalendarEventProtocol): TKShape;

	calendarShouldSelectDate(calendar: TKCalendar, date: Date): boolean;

	calendarTextForEvent(calendar: TKCalendar, event: TKCalendarEventProtocol): string;

	calendarUpdateVisualsForCell(calendar: TKCalendar, cell: TKCalendarCell): void;

	calendarViewForCellOfKind(calendar: TKCalendar, cellType: TKCalendarCellType): TKCalendarCell;

	calendarWillNavigateToDate(calendar: TKCalendar, date: Date): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface TKCalendarYearViewControllerDelegate extends NSObjectProtocol {

	navigatedToMonthViewController(monthViewController: TKCalendarMonthViewController): void;
}
declare var TKCalendarYearViewControllerDelegate: {

	prototype: TKCalendarYearViewControllerDelegate;
};

declare class TKChart extends TKView {

	static alloc(): TKChart; // inherited from NSObject

	static appearance(): TKChart; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKChart; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKChart; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKChart; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKChart; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKChart; // inherited from UIAppearance

	static new(): TKChart; // inherited from NSObject

	allowAnimations: boolean;

	allowPanDeceleration: boolean;

	allowTrackball: boolean;

	animationDuration: number;

	readonly annotations: NSArray<any>;

	readonly axes: NSArray<any>;

	dataPointSelectionMode: TKChartSelectionMode;

	dataSource: TKChartDataSource;

	delegate: TKChartDelegate;

	readonly gridStyle: TKChartGridStyle;

	handleDoubleTap: boolean;

	insets: UIEdgeInsets;

	readonly legend: TKChartLegendView;

	readonly plotView: TKChartPlotView;

	plotViewInsets: UIEdgeInsets;

	readonly selectedPoints: NSArray<TKChartSelectionInfo>;

	readonly selectedSeries: NSArray<TKChartSeries>;

	selectionMode: TKChartSelectionMode;

	readonly series: NSArray<TKChartSeries>;

	seriesSelectionMode: TKChartSelectionMode;

	theme: TKTheme;

	readonly title: TKChartTitleView;

	readonly trackball: TKChartTrackball;

	xAxis: TKChartAxis;

	yAxis: TKChartAxis;

	zoomMode: TKChartZoomMode;

	addAnnotation(annotation: TKChartAnnotation): void;

	addAxis(axis: TKChartAxis): void;

	addSeries(series: TKChartSeries): void;

	animate(): void;

	beginUpdates(): void;

	dequeueReusableSeriesWithIdentifier(identifier: string): any;

	deselect(info: TKChartSelectionInfo): void;

	endUpdates(): void;

	hitTestForPoint(point: CGPoint): TKChartSelectionInfo;

	paletteItemForPointInSeries(index: number, series: TKChartSeries): TKChartPaletteItem;

	paletteItemForSeriesAtIndex(series: TKChartSeries, index: number): TKChartPaletteItem;

	reloadData(): void;

	removeAllAnnotations(): void;

	removeAllData(): void;

	removeAnnotation(annotation: TKChartAnnotation): void;

	removeAxis(axis: TKChartAxis): boolean;

	removeSeries(series: TKChartSeries): void;

	select(info: TKChartSelectionInfo): void;

	update(): void;

	updateAnnotations(): void;

	visualPointForSeriesDataPointIndex(series: TKChartSeries, dataPointIndex: number): TKChartVisualPoint;

	visualPointsForSeries(series: TKChartSeries): NSArray<TKChartVisualPoint>;
}

declare class TKChartAbsoluteVolumeOscillator extends TKChartMACDIndicator {

	static alloc(): TKChartAbsoluteVolumeOscillator; // inherited from NSObject

	static new(): TKChartAbsoluteVolumeOscillator; // inherited from NSObject
}

declare class TKChartAccumulationDistributionLine extends TKChartFinancialIndicator {

	static alloc(): TKChartAccumulationDistributionLine; // inherited from NSObject

	static new(): TKChartAccumulationDistributionLine; // inherited from NSObject
}

declare class TKChartAdaptiveMovingAverageIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartAdaptiveMovingAverageIndicator; // inherited from NSObject

	static new(): TKChartAdaptiveMovingAverageIndicator; // inherited from NSObject

	fastPeriod: number;

	period: number;

	slowPerod: number;
}

declare class TKChartAnnotation extends NSObject {

	static alloc(): TKChartAnnotation; // inherited from NSObject

	static new(): TKChartAnnotation; // inherited from NSObject

	hidden: boolean;

	zPosition: TKChartAnnotationZPosition;

	annotationWasAddedToChartWithLayer(chart: TKChart, layer: CALayer): void;

	annotationWillBeRemovedFromChart(chart: TKChart): void;

	drawInContext(context: any): void;

	layoutInRectForChartInLayer(bounds: CGRect, chart: TKChart, layer: CALayer): void;

	locationOfValueWithAxisInBounds(value: any, axis: TKChartAxis, bounds: CGRect): number;
}

declare class TKChartAnnotationStyle extends TKStyleNode {

	static alloc(): TKChartAnnotationStyle; // inherited from NSObject

	static new(): TKChartAnnotationStyle; // inherited from NSObject
}

declare const enum TKChartAnnotationZPosition {

	BelowSeries = 0,

	AboveSeries = 1
}

declare class TKChartAreaSeries extends TKChartLineSeries {

	static alloc(): TKChartAreaSeries; // inherited from NSObject

	static new(): TKChartAreaSeries; // inherited from NSObject
}

declare class TKChartAverageTrueRangeIndicator extends TKChartTrueRangeIndicator {

	static alloc(): TKChartAverageTrueRangeIndicator; // inherited from NSObject

	static new(): TKChartAverageTrueRangeIndicator; // inherited from NSObject

	period: number;
}

declare class TKChartAxis extends NSObject {

	static alloc(): TKChartAxis; // inherited from NSObject

	static new(): TKChartAxis; // inherited from NSObject

	allowPan: boolean;

	allowZoom: boolean;

	attributedTitle: NSAttributedString;

	customLabels: NSDictionary<any, any>;

	hidden: boolean;

	readonly isVertical: boolean;

	labelFormat: string;

	labelFormatter: NSFormatter;

	readonly majorTickCount: number;

	normalizedPan: number;

	pan: number;

	readonly plotMode: TKChartAxisPlotMode;

	position: TKChartAxisPosition;

	range: TKRange;

	style: TKChartAxisStyle;

	title: string;

	readonly visibleRange: TKRange;

	zoom: number;

	zoomRange: TKRange;

	constructor(o: { minimum: any; andMaximum: any; });

	constructor(o: { minimum: any; andMaximum: any; position: TKChartAxisPosition; });

	constructor(o: { range: TKRange; });

	formatValue(value: any): string;

	initWithMinimumAndMaximum(minimum: any, maximum: any): this;

	initWithMinimumAndMaximumPosition(minimum: any, maximum: any, position: TKChartAxisPosition): this;

	initWithRange(range: TKRange): this;

	numericValue(value: any): number;

	panToDataPoint(dataPoint: TKChartData): void;

	renderForChart(chart: TKChart): TKChartAxisRender;

	tickValue(index: number): any;
}

declare const enum TKChartAxisClippingMode {

	Visible = 0,

	Hidden = 1
}

declare const enum TKChartAxisLabelAlignment {

	Left = 1,

	Right = 2,

	Top = 4,

	Bottom = 8,

	HorizontalCenter = 16,

	VerticalCenter = 32
}

declare const enum TKChartAxisLabelFitMode {

	None = 0,

	Multiline = 1,

	Rotate = 2
}

declare class TKChartAxisLabelStyle extends TKChartLabelStyle {

	static alloc(): TKChartAxisLabelStyle; // inherited from NSObject

	static new(): TKChartAxisLabelStyle; // inherited from NSObject

	clipAxisLabels: boolean;

	firstLabelTextAlignment: TKChartAxisLabelAlignment;

	firstLabelTextOffset: UIOffset;

	fitMode: TKChartAxisLabelFitMode;

	lastLabelTextAlignment: TKChartAxisLabelAlignment;

	lastLabelTextOffset: UIOffset;

	maxLabelClippingMode: TKChartAxisClippingMode;

	minLabelClippingMode: TKChartAxisClippingMode;

	rotationAngle: number;

	textAlignment: TKChartAxisLabelAlignment;

	textOffset: UIOffset;
}

declare class TKChartAxisMajorTickStyle extends TKChartAxisTickStyle {

	static alloc(): TKChartAxisMajorTickStyle; // inherited from NSObject

	static new(): TKChartAxisMajorTickStyle; // inherited from NSObject

	maxTickClippingMode: TKChartAxisClippingMode;

	minTickClippingMode: TKChartAxisClippingMode;
}

declare const enum TKChartAxisPlotMode {

	OnTicks = 0,

	BetweenTicks = 1
}

declare const enum TKChartAxisPosition {

	Left = 0,

	Right = 1,

	Top = 2,

	Bottom = 3
}

declare class TKChartAxisRender extends TKChartRender {

	static alloc(): TKChartAxisRender; // inherited from NSObject

	static layer(): TKChartAxisRender; // inherited from CALayer

	static new(): TKChartAxisRender; // inherited from NSObject

	readonly axis: TKChartAxis;

	readonly isVertical: boolean;

	constructor(o: { axis: TKChartAxis; chart: TKChart; });

	boundsRect(): CGRect;

	initWithAxisChart(axis: TKChartAxis, chart: TKChart): this;

	sizeThatFits(size: CGSize): CGSize;
}

declare class TKChartAxisStyle extends TKStyleNode {

	static alloc(): TKChartAxisStyle; // inherited from NSObject

	static new(): TKChartAxisStyle; // inherited from NSObject

	backgroundFill: TKFill;

	readonly labelStyle: TKChartAxisLabelStyle;

	lineHidden: boolean;

	lineLocation: number;

	lineStroke: TKStroke;

	readonly majorTickStyle: TKChartAxisMajorTickStyle;

	readonly minorTickStyle: TKChartAxisTickStyle;

	readonly titleStyle: TKChartAxisTitleStyle;
}

declare class TKChartAxisTickStyle extends TKStyleNode {

	static alloc(): TKChartAxisTickStyle; // inherited from NSObject

	static new(): TKChartAxisTickStyle; // inherited from NSObject

	ticksFill: TKFill;

	ticksHidden: boolean;

	ticksLength: number;

	ticksOffset: number;

	ticksStroke: TKStroke;

	ticksWidth: number;
}

declare const enum TKChartAxisTitleAlignment {

	Center = 0,

	LeftOrTop = 1,

	RightOrBottom = 2
}

declare class TKChartAxisTitleStyle extends TKChartLabelStyle {

	static alloc(): TKChartAxisTitleStyle; // inherited from NSObject

	static new(): TKChartAxisTitleStyle; // inherited from NSObject

	alignment: TKChartAxisTitleAlignment;

	rotationAngle: number;

	textOffset: number;
}

declare class TKChartBalloonAnnotation extends TKChartPointAnnotation {

	static alloc(): TKChartBalloonAnnotation; // inherited from NSObject

	static new(): TKChartBalloonAnnotation; // inherited from NSObject

	attributedText: NSAttributedString;

	size: CGSize;

	readonly style: TKChartBalloonAnnotationStyle;

	text: string;

	view: UIView;

	constructor(o: { text: string; });

	constructor(o: { text: string; point: TKChartData; forSeries: TKChartSeries; });

	constructor(o: { text: string; point: TKChartData; forXAxis: TKChartAxis; forYAxis: TKChartAxis; });

	constructor(o: { text: string; x: any; y: any; forSeries: TKChartSeries; });

	constructor(o: { text: string; x: any; y: any; forXAxis: TKChartAxis; forYAxis: TKChartAxis; });

	initWithText(text: string): this;

	initWithTextPointForSeries(text: string, point: TKChartData, series: TKChartSeries): this;

	initWithTextPointForXAxisForYAxis(text: string, point: TKChartData, xAxis: TKChartAxis, yAxis: TKChartAxis): this;

	initWithTextXYForSeries(text: string, xValue: any, yValue: any, series: TKChartSeries): this;

	initWithTextXYForXAxisForYAxis(text: string, xValue: any, yValue: any, xAxis: TKChartAxis, yAxis: TKChartAxis): this;
}

declare class TKChartBalloonAnnotationStyle extends TKChartAnnotationStyle {

	static alloc(): TKChartBalloonAnnotationStyle; // inherited from NSObject

	static new(): TKChartBalloonAnnotationStyle; // inherited from NSObject

	arrowSize: CGSize;

	cornerRadius: number;

	distanceFromPoint: number;

	fill: TKFill;

	font: UIFont;

	horizontalAlign: TKChartBalloonHorizontalAlignment;

	insets: UIEdgeInsets;

	stroke: TKStroke;

	textAlignment: NSTextAlignment;

	textColor: UIColor;

	textOrientation: TKChartBalloonAnnotationTextOrientation;

	verticalAlign: TKChartBalloonVerticalAlignment;
}

declare const enum TKChartBalloonAnnotationTextOrientation {

	Vertical = 0,

	Horizontal = 1
}

declare const enum TKChartBalloonHorizontalAlignment {

	Center = 0,

	Left = 1,

	Right = 2
}

declare const enum TKChartBalloonVerticalAlignment {

	Center = 0,

	Top = 1,

	Bottom = 2
}

declare class TKChartBandAnnotation extends TKChartAnnotation {

	static alloc(): TKChartBandAnnotation; // inherited from NSObject

	static new(): TKChartBandAnnotation; // inherited from NSObject

	axis: TKChartAxis;

	range: TKRange;

	readonly style: TKChartBandAnnotationStyle;

	constructor(o: { range: TKRange; forAxis: TKChartAxis; });

	constructor(o: { range: TKRange; forAxis: TKChartAxis; withFill: TKFill; withStroke: TKStroke; });

	initWithRangeForAxis(aRange: TKRange, anAxis: TKChartAxis): this;

	initWithRangeForAxisWithFillWithStroke(aRange: TKRange, anAxis: TKChartAxis, fill: TKFill, stroke: TKStroke): this;
}

declare class TKChartBandAnnotationStyle extends TKChartGridLineAnnotationStyle {

	static alloc(): TKChartBandAnnotationStyle; // inherited from NSObject

	static new(): TKChartBandAnnotationStyle; // inherited from NSObject

	fill: TKFill;
}

declare class TKChartBandIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartBandIndicator; // inherited from NSObject

	static new(): TKChartBandIndicator; // inherited from NSObject
}

declare class TKChartBandVisualPoint extends TKChartVisualPoint {

	static alloc(): TKChartBandVisualPoint; // inherited from NSObject

	static new(): TKChartBandVisualPoint; // inherited from NSObject

	signalY: number;

	constructor(o: { point: CGPoint; signalY: number; });

	initWithPointSignalY(point: CGPoint, signalY: number): this;
}

declare class TKChartBarSeries extends TKChartSeries {

	static alloc(): TKChartBarSeries; // inherited from NSObject

	static new(): TKChartBarSeries; // inherited from NSObject

	allowClustering: boolean;

	gapLength: number;

	maxBarHeight: number;

	minBarHeight: number;
}

declare class TKChartBollingerBandIndicator extends TKChartBandIndicator {

	static alloc(): TKChartBollingerBandIndicator; // inherited from NSObject

	static new(): TKChartBollingerBandIndicator; // inherited from NSObject

	period: number;

	width: number;
}

declare class TKChartBubbleDataPoint extends NSObject implements TKChartData {

	static alloc(): TKChartBubbleDataPoint; // inherited from NSObject

	static dataPointWithXYArea(xValue: any, yValue: any, area: number): TKChartBubbleDataPoint;

	static new(): TKChartBubbleDataPoint; // inherited from NSObject

	area: number;

	dataXValue: any;

	dataYValue: any;

	readonly close: number; // inherited from TKChartData

	readonly dataName: string; // inherited from TKChartData

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly high: number; // inherited from TKChartData

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly low: number; // inherited from TKChartData

	readonly open: number; // inherited from TKChartData

	readonly signalYValue: any; // inherited from TKChartData

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly volume: number; // inherited from TKChartData

	readonly  // inherited from NSObjectProtocol

	constructor(o: { x: any; y: any; area: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithXYArea(xValue: any, yValue: any, area: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKChartBubbleSeries extends TKChartScatterSeries {

	static alloc(): TKChartBubbleSeries; // inherited from NSObject

	static new(): TKChartBubbleSeries; // inherited from NSObject

	biggestBubbleDiameterForAutoscale: number;

	scale: number;
}

declare class TKChartBubbleVisualPoint extends TKChartVisualPoint {

	static alloc(): TKChartBubbleVisualPoint; // inherited from NSObject

	static new(): TKChartBubbleVisualPoint; // inherited from NSObject

	diameter: number;
}

declare class TKChartCandlestickBar extends TKChartOhlcBar {

	static alloc(): TKChartCandlestickBar; // inherited from NSObject

	static new(): TKChartCandlestickBar; // inherited from NSObject
}

declare class TKChartCandlestickSeries extends TKChartOhlcSeries {

	static alloc(): TKChartCandlestickSeries; // inherited from NSObject

	static new(): TKChartCandlestickSeries; // inherited from NSObject
}

declare class TKChartCategory extends NSObject {

	static alloc(): TKChartCategory; // inherited from NSObject

	static categoryWithDescription(description: string): TKChartCategory;

	static new(): TKChartCategory; // inherited from NSObject

	constructor(o: { description: string; });

	initWithDescription(description: string): this;
}

declare class TKChartCategoryAxis extends TKChartAxis {

	static alloc(): TKChartCategoryAxis; // inherited from NSObject

	static new(): TKChartCategoryAxis; // inherited from NSObject

	baseline: number;

	readonly categories: NSArray<any>;

	readonly majorTickInterval: number;

	minorTickInterval: number;

	offset: number;

	constructor(o: { categories: NSArray<any>; });

	constructor(o: { categories: NSArray<any>; andRange: TKRange; });

	addCategoriesFromArray(categories: NSArray<any>): void;

	addCategory(category: any): void;

	initWithCategories(categories: NSArray<any>): this;

	initWithCategoriesAndRange(categories: NSArray<any>, range: TKRange): this;

	removeAllCategories(): void;

	removeCategoriesInArray(categories: NSArray<any>): void;

	removeCategory(category: any): void;

	setPlotMode(plotMode: TKChartAxisPlotMode): void;
}

declare class TKChartChaikinOscillator extends TKChartFinancialIndicator {

	static alloc(): TKChartChaikinOscillator; // inherited from NSObject

	static new(): TKChartChaikinOscillator; // inherited from NSObject

	longPeriod: number;

	shortPeriod: number;
}

declare class TKChartColumnSeries extends TKChartSeries {

	static alloc(): TKChartColumnSeries; // inherited from NSObject

	static new(): TKChartColumnSeries; // inherited from NSObject

	allowClustering: boolean;

	gapLength: number;

	maxColumnWidth: number;

	minColumnWidth: number;
}

declare class TKChartCommodityChannelIndex extends TKChartFinancialIndicator {

	static alloc(): TKChartCommodityChannelIndex; // inherited from NSObject

	static new(): TKChartCommodityChannelIndex; // inherited from NSObject

	period: number;
}

declare class TKChartCrossLineAnnotation extends TKChartPointAnnotation {

	static alloc(): TKChartCrossLineAnnotation; // inherited from NSObject

	static new(): TKChartCrossLineAnnotation; // inherited from NSObject

	readonly style: TKChartCrossLineAnnotationStyle;
}

declare const enum TKChartCrossLineAnnotationOrientation {

	Horizontal = 1,

	Vertical = 2
}

declare class TKChartCrossLineAnnotationStyle extends TKChartAnnotationStyle {

	static alloc(): TKChartCrossLineAnnotationStyle; // inherited from NSObject

	static new(): TKChartCrossLineAnnotationStyle; // inherited from NSObject

	horizontalLineStroke: TKStroke;

	insets: UIEdgeInsets;

	orientation: TKChartCrossLineAnnotationOrientation;

	pointShape: TKShape;

	pointShapeFill: TKFill;

	pointShapeInsets: UIEdgeInsets;

	pointShapeStroke: TKStroke;

	verticalLineStroke: TKStroke;
}

interface TKChartData extends NSObjectProtocol {

	area?: number;

	close?: number;

	dataName?: string;

	dataXValue: any;

	dataYValue: any;

	high?: number;

	low?: number;

	open?: number;

	signalYValue?: any;

	volume?: number;
}
declare var TKChartData: {

	prototype: TKChartData;
};

declare class TKChartDataPoint extends NSObject implements TKChartData {

	static alloc(): TKChartDataPoint; // inherited from NSObject

	static dataPointWithXY(xValue: any, yValue: any): TKChartDataPoint;

	static dataPointWithXYName(xValue: any, yValue: any, name: string): TKChartDataPoint;

	static new(): TKChartDataPoint; // inherited from NSObject

	dataName: string;

	dataXValue: any;

	dataYValue: any;

	readonly area: number; // inherited from TKChartData

	readonly close: number; // inherited from TKChartData

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly high: number; // inherited from TKChartData

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly low: number; // inherited from TKChartData

	readonly open: number; // inherited from TKChartData

	readonly signalYValue: any; // inherited from TKChartData

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly volume: number; // inherited from TKChartData

	readonly  // inherited from NSObjectProtocol

	constructor(o: { name: string; value: any; });

	constructor(o: { x: any; y: any; });

	constructor(o: { x: any; y: any; name: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithNameValue(name: string, value: any): this;

	initWithXY(xValue: any, yValue: any): this;

	initWithXYName(xValue: any, yValue: any, name: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface TKChartDataSource extends NSObjectProtocol {

	chartDataPointAtIndexForSeriesAtIndex?(chart: TKChart, dataIndex: number, seriesIndex: number): TKChartData;

	chartDataPointsForSeriesAtIndex?(chart: TKChart, seriesIndex: number): NSArray<any>;

	chartNumberOfDataPointsForSeriesAtIndex?(chart: TKChart, seriesIndex: number): number;

	numberOfSeriesForChart(chart: TKChart): number;

	seriesForChartAtIndex(chart: TKChart, index: number): TKChartSeries;
}
declare var TKChartDataSource: {

	prototype: TKChartDataSource;
};

declare class TKChartDateTimeAxis extends TKChartAxis {

	static alloc(): TKChartDateTimeAxis; // inherited from NSObject

	static new(): TKChartDateTimeAxis; // inherited from NSObject

	baseline: Date;

	majorTickInterval: number;

	majorTickIntervalUnit: TKChartDateTimeAxisIntervalUnit;

	minorTickIntervalUnit: TKChartDateTimeAxisIntervalUnit;

	offset: Date;

	constructor(o: { minimumDate: Date; andMaximumDate: Date; });

	initWithMinimumDateAndMaximumDate(minDate: Date, maxDate: Date): this;

	setMajorTickCount(tickCount: number): void;

	setPlotMode(plotMode: TKChartAxisPlotMode): void;
}

declare const enum TKChartDateTimeAxisIntervalUnit {

	Seconds = 0,

	Minutes = 1,

	Hours = 2,

	Days = 3,

	Weeks = 4,

	Months = 5,

	Years = 6,

	Custom = 7
}

declare class TKChartDateTimeCategoryAxis extends TKChartAxis {

	static alloc(): TKChartDateTimeCategoryAxis; // inherited from NSObject

	static new(): TKChartDateTimeCategoryAxis; // inherited from NSObject

	baseline: Date;

	readonly categories: NSArray<any>;

	dateComponent: NSCalendarUnit;

	readonly majorTickInterval: number;

	minorTickInterval: number;

	offset: Date;

	constructor(o: { minimumDate: Date; andMaximumDate: Date; });

	initWithMinimumDateAndMaximumDate(minDate: Date, maxDate: Date): this;

	removeAllCategories(): void;

	setPlotMode(plotMode: TKChartAxisPlotMode): void;
}

interface TKChartDelegate extends NSObjectProtocol {

	chartAnimationForSeriesWithStateInRect?(chart: TKChart, series: TKChartSeries, state: TKChartSeriesRenderState, rect: CGRect): CAAnimation;

	chartAttributedTextForAxisValueAtIndex?(chart: TKChart, axis: TKChartAxis, value: any, index: number): NSAttributedString;

	chartDidDeselectPointInSeriesAtIndex?(chart: TKChart, point: TKChartData, series: TKChartSeries, index: number): void;

	chartDidDeselectSeries?(chart: TKChart, series: TKChartSeries): void;

	chartDidPan?(chart: TKChart): void;

	chartDidSelectPointInSeriesAtIndex?(chart: TKChart, point: TKChartData, series: TKChartSeries, index: number): void;

	chartDidSelectSeries?(chart: TKChart, series: TKChartSeries): void;

	chartDidTapOnLegendItem?(chart: TKChart, legendItem: TKChartLegendItem): void;

	chartDidZoom?(chart: TKChart): void;

	chartLabelForDataPointPropertyInSeriesAtIndex?(chart: TKChart, dataPoint: TKChartData, propertyName: string, series: TKChartSeries, dataIndex: number): TKChartPointLabel;

	chartLegendItemForSeriesAtIndex?(chart: TKChart, series: TKChartSeries, index: number): TKChartLegendItem;

	chartPaletteItemForPointInSeries?(chart: TKChart, index: number, series: TKChartSeries): TKChartPaletteItem;

	chartPaletteItemForSeriesAtIndex?(chart: TKChart, series: TKChartSeries, index: number): TKChartPaletteItem;

	chartPointLabelRenderForSeriesWithRender?(chart: TKChart, series: TKChartSeries, render: TKChartSeriesRender): TKChartPointLabelRender;

	chartShapeForSeriesAtIndex?(chart: TKChart, series: TKChartSeries, index: number): TKShape;

	chartTextForAxisValueAtIndex?(chart: TKChart, axis: TKChartAxis, value: any, index: number): string;

	chartTextForLabelAtPointPropertyInSeriesAtIndex?(chart: TKChart, dataPoint: TKChartData, propertyName: string, series: TKChartSeries, dataIndex: number): string;

	chartTrackballDidHideSelection?(chart: TKChart, selection: NSArray<any>): void;

	chartTrackballDidTrackSelection?(chart: TKChart, selection: NSArray<any>): void;

	chartUpdateLegendItemForSeriesAtIndex?(chart: TKChart, item: TKChartLegendItem, series: TKChartSeries, index: number): void;

	chartWillPan?(chart: TKChart): void;

	chartWillZoom?(chart: TKChart): void;
}
declare var TKChartDelegate: {

	prototype: TKChartDelegate;
};

declare class TKChartDetrendedPriceOscillator extends TKChartFinancialIndicator {

	static alloc(): TKChartDetrendedPriceOscillator; // inherited from NSObject

	static new(): TKChartDetrendedPriceOscillator; // inherited from NSObject

	period: number;
}

declare class TKChartDonutSeries extends TKChartPieSeries {

	static alloc(): TKChartDonutSeries; // inherited from NSObject

	static new(): TKChartDonutSeries; // inherited from NSObject

	innerRadius: number;
}

declare class TKChartEaseOfMovementIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartEaseOfMovementIndicator; // inherited from NSObject

	static new(): TKChartEaseOfMovementIndicator; // inherited from NSObject

	period: number;
}

declare class TKChartExponentialMovingAverageIndicator extends TKChartSimpleMovingAverageIndicator {

	static alloc(): TKChartExponentialMovingAverageIndicator; // inherited from NSObject

	static new(): TKChartExponentialMovingAverageIndicator; // inherited from NSObject
}

declare class TKChartFastStochasticIndicator extends TKChartSignalLineIndicator {

	static alloc(): TKChartFastStochasticIndicator; // inherited from NSObject

	static new(): TKChartFastStochasticIndicator; // inherited from NSObject

	period: number;

	signalPeriod: number;
}

declare class TKChartFinancialDataPoint extends NSObject implements TKChartData {

	static alloc(): TKChartFinancialDataPoint; // inherited from NSObject

	static dataPointWithXOpenHighLowClose(xValue: any, open: number, high: number, low: number, close: number): TKChartFinancialDataPoint;

	static dataPointWithXOpenHighLowCloseVolume(xValue: any, open: number, high: number, low: number, close: number, volume: number): TKChartFinancialDataPoint;

	static new(): TKChartFinancialDataPoint; // inherited from NSObject

	close: number;

	dataName: string;

	dataXValue: any;

	dataYValue: any;

	high: number;

	low: number;

	open: number;

	volume: number;

	readonly area: number; // inherited from TKChartData

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly signalYValue: any; // inherited from TKChartData

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { x: any; open: number; high: number; low: number; close: number; volume: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithXOpenHighLowCloseVolume(xValue: any, open: number, high: number, low: number, close: number, volume: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKChartFinancialIndicator extends TKChartSeries {

	static alloc(): TKChartFinancialIndicator; // inherited from NSObject

	static new(): TKChartFinancialIndicator; // inherited from NSObject

	marginForHitDetection: number;

	series: TKChartSeries;

	constructor(o: { series: TKChartSeries; });

	initWithSeries(series: TKChartSeries): this;
}

declare class TKChartForceIndexIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartForceIndexIndicator; // inherited from NSObject

	static new(): TKChartForceIndexIndicator; // inherited from NSObject

	period: number;
}

declare class TKChartFullStochasticIndicator extends TKChartSlowStochasticIndicator {

	static alloc(): TKChartFullStochasticIndicator; // inherited from NSObject

	static new(): TKChartFullStochasticIndicator; // inherited from NSObject

	smoothPeriod: number;
}

declare const enum TKChartGridDrawMode {

	HorizontalFirst = 0,

	VerticalFirst = 1
}

declare class TKChartGridLineAnnotation extends TKChartAnnotation {

	static alloc(): TKChartGridLineAnnotation; // inherited from NSObject

	static new(): TKChartGridLineAnnotation; // inherited from NSObject

	axis: TKChartAxis;

	readonly style: TKChartGridLineAnnotationStyle;

	value: any;

	constructor(o: { value: any; forAxis: TKChartAxis; });

	constructor(o: { value: any; forAxis: TKChartAxis; withStroke: TKStroke; });

	initWithValueForAxis(value: any, axis: TKChartAxis): this;

	initWithValueForAxisWithStroke(value: any, axis: TKChartAxis, stroke: TKStroke): this;
}

declare class TKChartGridLineAnnotationStyle extends TKChartAnnotationStyle {

	static alloc(): TKChartGridLineAnnotationStyle; // inherited from NSObject

	static new(): TKChartGridLineAnnotationStyle; // inherited from NSObject

	stroke: TKStroke;
}

declare class TKChartGridStyle extends TKStyleNode {

	static alloc(): TKChartGridStyle; // inherited from NSObject

	static new(): TKChartGridStyle; // inherited from NSObject

	backgroundFill: TKFill;

	drawOrder: TKChartGridDrawMode;

	horizontalAlternateFill: TKFill;

	horizontalFill: TKFill;

	horizontalLineAlternateStroke: TKStroke;

	horizontalLineStroke: TKStroke;

	horizontalLinesHidden: boolean;

	verticalAlternateFill: TKFill;

	verticalFill: TKFill;

	verticalLineAlternateStroke: TKStroke;

	verticalLineStroke: TKStroke;

	verticalLinesHidden: boolean;

	zPosition: TKChartGridZPosition;
}

declare const enum TKChartGridZPosition {

	BelowSeries = 0,

	AboveSeries = 1
}

declare class TKChartLabelStyle extends TKStyleNode {

	static alloc(): TKChartLabelStyle; // inherited from NSObject

	static new(): TKChartLabelStyle; // inherited from NSObject

	font: UIFont;

	shadowColor: UIColor;

	shadowOffset: CGSize;

	textColor: UIColor;

	textHidden: boolean;
}

declare class TKChartLayerAnnotation extends TKChartPointAnnotation {

	static alloc(): TKChartLayerAnnotation; // inherited from NSObject

	static new(): TKChartLayerAnnotation; // inherited from NSObject

	layer: CALayer;

	constructor(o: { layer: CALayer; });

	constructor(o: { layer: CALayer; point: TKChartData; forSeries: TKChartSeries; });

	constructor(o: { layer: CALayer; point: TKChartData; forXAxis: TKChartAxis; forYAxis: TKChartAxis; });

	constructor(o: { layer: CALayer; x: any; y: any; forSeries: TKChartSeries; });

	constructor(o: { layer: CALayer; x: any; y: any; forXAxis: TKChartAxis; forYAxis: TKChartAxis; });

	initWithLayer(layer: CALayer): this;

	initWithLayerPointForSeries(layer: CALayer, point: TKChartData, series: TKChartSeries): this;

	initWithLayerPointForXAxisForYAxis(layer: CALayer, point: TKChartData, xAxis: TKChartAxis, yAxis: TKChartAxis): this;

	initWithLayerXYForSeries(layer: CALayer, xValue: any, yValue: any, series: TKChartSeries): this;

	initWithLayerXYForXAxisForYAxis(layer: CALayer, xValue: any, yValue: any, xAxis: TKChartAxis, yAxis: TKChartAxis): this;
}

declare class TKChartLegendContainer extends TKCoreStackLayoutView {

	static alloc(): TKChartLegendContainer; // inherited from NSObject

	static appearance(): TKChartLegendContainer; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKChartLegendContainer; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKChartLegendContainer; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKChartLegendContainer; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKChartLegendContainer; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKChartLegendContainer; // inherited from UIAppearance

	static new(): TKChartLegendContainer; // inherited from NSObject

	readonly itemCount: number;

	preferredSize: CGSize;

	addItem(item: TKChartLegendItem): void;

	indexOfItem(item: TKChartLegendItem): number;

	itemAtIndex(index: number): TKChartLegendItem;

	removeAllItems(): void;
}

declare class TKChartLegendItem extends UIView {

	static alloc(): TKChartLegendItem; // inherited from NSObject

	static appearance(): TKChartLegendItem; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKChartLegendItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKChartLegendItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKChartLegendItem; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKChartLegendItem; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKChartLegendItem; // inherited from UIAppearance

	static new(): TKChartLegendItem; // inherited from NSObject

	icon: UIView;

	label: UILabel;

	selectionInfo: TKChartSelectionInfo;

	readonly stack: TKCoreStackLayout;

	style: TKChartLegendItemStyle;

	tap(tapRecognizer: UITapGestureRecognizer): void;

	update(): void;
}

declare class TKChartLegendItemStyle extends TKStyleNode {

	static alloc(): TKChartLegendItemStyle; // inherited from NSObject

	static new(): TKChartLegendItemStyle; // inherited from NSObject

	fill: TKFill;

	iconSize: CGSize;

	readonly labelStyle: TKChartLabelStyle;

	stroke: TKStroke;
}

declare const enum TKChartLegendOffsetOrigin {

	TopLeft = 0,

	TopRight = 1,

	BottomLeft = 2,

	BottomRight = 3
}

declare const enum TKChartLegendPosition {

	Left = 0,

	Right = 1,

	Top = 2,

	Bottom = 3,

	Floating = 4
}

declare class TKChartLegendStyle extends TKStyleNode {

	static alloc(): TKChartLegendStyle; // inherited from NSObject

	static new(): TKChartLegendStyle; // inherited from NSObject

	fill: TKFill;

	insets: UIEdgeInsets;

	offset: UIOffset;

	offsetOrigin: TKChartLegendOffsetOrigin;

	position: TKChartLegendPosition;

	stroke: TKStroke;
}

declare class TKChartLegendView extends TKView {

	static alloc(): TKChartLegendView; // inherited from NSObject

	static appearance(): TKChartLegendView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKChartLegendView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKChartLegendView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKChartLegendView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKChartLegendView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKChartLegendView; // inherited from UIAppearance

	static new(): TKChartLegendView; // inherited from NSObject

	allowSelection: boolean;

	chart: TKChart;

	readonly container: TKChartLegendContainer;

	showTitle: boolean;

	readonly style: TKChartLegendStyle;

	readonly titleLabel: UILabel;

	constructor(o: { chart: TKChart; });

	initWithChart(chart: TKChart): this;

	reloadItems(): void;

	update(): void;
}

declare class TKChartLineSeries extends TKChartSeries {

	static alloc(): TKChartLineSeries; // inherited from NSObject

	static new(): TKChartLineSeries; // inherited from NSObject

	displayNilValuesAsGaps: boolean;

	marginForHitDetection: number;
}

declare class TKChartLogarithmicAxis extends TKChartNumericAxis {

	static alloc(): TKChartLogarithmicAxis; // inherited from NSObject

	static new(): TKChartLogarithmicAxis; // inherited from NSObject

	exponentStep: number;

	logarithmBase: number;
}

declare class TKChartMACDIndicator extends TKChartSignalLineIndicator {

	static alloc(): TKChartMACDIndicator; // inherited from NSObject

	static new(): TKChartMACDIndicator; // inherited from NSObject

	longPeriod: number;

	shortPeriod: number;

	signalPeriod: number;
}

declare class TKChartMarketFacilitationIndex extends TKChartFinancialIndicator {

	static alloc(): TKChartMarketFacilitationIndex; // inherited from NSObject

	static new(): TKChartMarketFacilitationIndex; // inherited from NSObject

	gapLength: number;

	maxColumnWidth: number;

	minColumnWidth: number;

	range: number;
}

declare class TKChartMedianPriceIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartMedianPriceIndicator; // inherited from NSObject

	static new(): TKChartMedianPriceIndicator; // inherited from NSObject
}

declare class TKChartModifiedMovingAverageIndicator extends TKChartExponentialMovingAverageIndicator {

	static alloc(): TKChartModifiedMovingAverageIndicator; // inherited from NSObject

	static new(): TKChartModifiedMovingAverageIndicator; // inherited from NSObject
}

declare class TKChartMoneyFlowIndexIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartMoneyFlowIndexIndicator; // inherited from NSObject

	static new(): TKChartMoneyFlowIndexIndicator; // inherited from NSObject

	period: number;
}

declare class TKChartMovingAverageEnvelopesIndicator extends TKChartBandIndicator {

	static alloc(): TKChartMovingAverageEnvelopesIndicator; // inherited from NSObject

	static new(): TKChartMovingAverageEnvelopesIndicator; // inherited from NSObject

	envelopesPercentage: number;

	period: number;
}

declare class TKChartNegativeVolumeIndexIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartNegativeVolumeIndexIndicator; // inherited from NSObject

	static new(): TKChartNegativeVolumeIndexIndicator; // inherited from NSObject
}

declare class TKChartNumericAxis extends TKChartAxis {

	static alloc(): TKChartNumericAxis; // inherited from NSObject

	static new(): TKChartNumericAxis; // inherited from NSObject

	baseline: number;

	labelDisplayMode: TKChartNumericAxisLabelDisplayMode;

	majorTickInterval: number;

	minorTickInterval: number;

	offset: number;
}

declare const enum TKChartNumericAxisLabelDisplayMode {

	Value = 0,

	Percentage = 1
}

declare class TKChartOhlcBar extends TKChartVisualPoint {

	static alloc(): TKChartOhlcBar; // inherited from NSObject

	static new(): TKChartOhlcBar; // inherited from NSObject

	bodyWidth: number;

	closeValue: number;

	highValue: number;

	lowValue: number;

	openValue: number;

	constructor(o: { point: TKChartFinancialDataPoint; atIndex: number; series: TKChartSeries; render: TKChartSeriesRender; });

	drawInContext(ctx: any): void;

	initWithPointAtIndexSeriesRender(data: TKChartFinancialDataPoint, index: number, series: TKChartSeries, render: TKChartSeriesRender): this;
}

declare class TKChartOhlcSeries extends TKChartColumnSeries {

	static alloc(): TKChartOhlcSeries; // inherited from NSObject

	static new(): TKChartOhlcSeries; // inherited from NSObject
}

declare class TKChartOnBalanceVolumeIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartOnBalanceVolumeIndicator; // inherited from NSObject

	static new(): TKChartOnBalanceVolumeIndicator; // inherited from NSObject
}

declare class TKChartPalette extends NSObject {

	static alloc(): TKChartPalette; // inherited from NSObject

	static new(): TKChartPalette; // inherited from NSObject

	readonly items: NSArray<any>;

	readonly itemsCount: number;

	addPaletteItem(item: TKChartPaletteItem): void;

	addPaletteItems(items: NSArray<any>): void;

	clearPalette(): void;

	insertPaletteItemAtIndex(item: TKChartPaletteItem, index: number): void;

	paletteItemAtIndex(index: number): TKChartPaletteItem;

	replacePaletteItemAtIndex(item: TKChartPaletteItem, index: number): void;
}

declare class TKChartPaletteItem extends NSObject {

	static alloc(): TKChartPaletteItem; // inherited from NSObject

	static new(): TKChartPaletteItem; // inherited from NSObject

	static paletteItemWithDrawables(drawables: NSArray<any>): TKChartPaletteItem;

	static paletteItemWithFill(fill: TKFill): TKChartPaletteItem;

	static paletteItemWithStroke(stroke: TKStroke): TKChartPaletteItem;

	static paletteItemWithStrokeAndFill(stroke: TKStroke, fill: TKFill): TKChartPaletteItem;

	drawables: NSArray<any>;

	fill: TKFill;

	font: UIFont;

	stroke: TKStroke;

	textColor: UIColor;

	constructor(o: { drawables: NSArray<any>; });

	constructor(o: { fill: TKFill; });

	constructor(o: { stroke: TKStroke; });

	constructor(o: { stroke: TKStroke; andFill: TKFill; });

	initWithDrawables(drawables: NSArray<any>): this;

	initWithFill(fill: TKFill): this;

	initWithStroke(stroke: TKStroke): this;

	initWithStrokeAndFill(stroke: TKStroke, fill: TKFill): this;
}

declare class TKChartPercentagePriceOscillator extends TKChartMACDIndicator {

	static alloc(): TKChartPercentagePriceOscillator; // inherited from NSObject

	static new(): TKChartPercentagePriceOscillator; // inherited from NSObject
}

declare class TKChartPercentageVolumeOscillator extends TKChartMACDIndicator {

	static alloc(): TKChartPercentageVolumeOscillator; // inherited from NSObject

	static new(): TKChartPercentageVolumeOscillator; // inherited from NSObject
}

declare class TKChartPieSeries extends TKChartSeries {

	static alloc(): TKChartPieSeries; // inherited from NSObject

	static new(): TKChartPieSeries; // inherited from NSObject

	adjustSizeToFit: boolean;

	displayPercentage: boolean;

	endAngle: number;

	expandRadius: number;

	labelDisplayMode: TKChartPieSeriesLabelDisplayMode;

	outerRadius: number;

	radiusInset: number;

	rotationAngle: number;

	rotationDeceleration: number;

	rotationEnabled: boolean;

	selectionAngle: number;

	startAngle: number;
}

declare const enum TKChartPieSeriesLabelDisplayMode {

	Inside = 1,

	Outside = 2
}

declare class TKChartPieVisualPoint extends TKChartVisualPoint {

	static alloc(): TKChartPieVisualPoint; // inherited from NSObject

	static new(): TKChartPieVisualPoint; // inherited from NSObject

	distanceFromCenter: number;

	startAngle: number;
}

declare class TKChartPlotView extends TKView implements UIGestureRecognizerDelegate {

	static alloc(): TKChartPlotView; // inherited from NSObject

	static appearance(): TKChartPlotView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKChartPlotView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKChartPlotView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKChartPlotView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKChartPlotView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKChartPlotView; // inherited from UIAppearance

	static new(): TKChartPlotView; // inherited from NSObject

	readonly chart: TKChart;

	readonly doubleTapGestureRecognizer: UITapGestureRecognizer;

	handleTap: boolean;

	readonly longPressRecognizer: UILongPressGestureRecognizer;

	readonly panZoomRecognizer: UIGestureRecognizer;

	readonly rotateOneFingerRecognizer: UIGestureRecognizer;

	readonly rotateTwoFingerRecognizer: UIRotationGestureRecognizer;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { chart: TKChart; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	hitTestForPoint(point: CGPoint): TKChartSelectionInfo;

	initWithChart(chart: TKChart): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	renderForSeries(series: TKChartSeries): TKChartSeriesRender;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKChartPointAnnotation extends TKChartAnnotation {

	static alloc(): TKChartPointAnnotation; // inherited from NSObject

	static new(): TKChartPointAnnotation; // inherited from NSObject

	offset: UIOffset;

	position: TKChartData;

	series: TKChartSeries;

	xAxis: TKChartAxis;

	yAxis: TKChartAxis;

	constructor(o: { point: TKChartData; forSeries: TKChartSeries; });

	constructor(o: { point: TKChartData; forXAxis: TKChartAxis; forYAxis: TKChartAxis; });

	constructor(o: { x: any; y: any; forSeries: TKChartSeries; });

	constructor(o: { x: any; y: any; forXAxis: TKChartAxis; forYAxis: TKChartAxis; });

	initWithPointForSeries(point: TKChartData, series: TKChartSeries): this;

	initWithPointForXAxisForYAxis(point: TKChartData, xAxis: TKChartAxis, yAxis: TKChartAxis): this;

	initWithXYForSeries(xValue: any, yValue: any, series: TKChartSeries): this;

	initWithXYForXAxisForYAxis(xValue: any, yValue: any, xAxis: TKChartAxis, yAxis: TKChartAxis): this;

	locationInRectForChart(bounds: CGRect, chart: TKChart): CGPoint;
}

declare class TKChartPointLabel extends NSObject {

	static alloc(): TKChartPointLabel; // inherited from NSObject

	static new(): TKChartPointLabel; // inherited from NSObject

	readonly dataPoint: TKChartData;

	readonly series: TKChartSeries;

	readonly style: TKChartPointLabelStyle;

	text: string;

	constructor(o: { point: TKChartData; series: TKChartSeries; text: string; });

	drawInContextInRectForVisualPointColor(ctx: any, bounds: CGRect, visualPoint: TKChartVisualPoint, paletteTextColor: UIColor): void;

	initWithPointSeriesText(point: TKChartData, series: TKChartSeries, text: string): this;

	sizeThatFits(size: CGSize): CGSize;
}

declare const enum TKChartPointLabelClipMode {

	Hidden = 0,

	Visible = 1
}

declare const enum TKChartPointLabelLayoutMode {

	Manual = 0,

	Auto = 1
}

declare const enum TKChartPointLabelOrientation {

	Vertical = 0,

	Horizontal = 1
}

declare class TKChartPointLabelRender extends NSObject {

	static alloc(): TKChartPointLabelRender; // inherited from NSObject

	static new(): TKChartPointLabelRender; // inherited from NSObject

	readonly chartDelegate: TKChartDelegate;

	readonly render: TKChartSeriesRender;

	constructor(o: { render: TKChartSeriesRender; });

	initWithRender(render: TKChartSeriesRender): this;

	isPointInsideRect(point: CGPoint, rect: CGRect): boolean;

	labelForDataPointPropertyInSeriesAtIndex(dataPoint: TKChartData, propertyName: string, series: TKChartSeries, dataIndex: number): TKChartPointLabel;

	locationForDataPointForSeriesInRect(dataPoint: TKChartData, series: TKChartSeries, rect: CGRect): CGPoint;

	renderPointLabelsForSeriesInRectContext(series: TKChartSeries, bounds: CGRect, ctx: any): void;
}

declare class TKChartPointLabelStyle extends TKChartLabelStyle {

	static alloc(): TKChartPointLabelStyle; // inherited from NSObject

	static new(): TKChartPointLabelStyle; // inherited from NSObject

	blurRadius: number;

	clipMode: TKChartPointLabelClipMode;

	cornerRadius: number;

	fill: TKFill;

	formatter: NSFormatter;

	insets: UIEdgeInsets;

	labelOffset: UIOffset;

	layoutMode: TKChartPointLabelLayoutMode;

	stringFormat: string;

	stroke: TKStroke;

	textAlignment: NSTextAlignment;

	textOrientation: TKChartPointLabelOrientation;
}

declare class TKChartPositiveVolumeIndexIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartPositiveVolumeIndexIndicator; // inherited from NSObject

	static new(): TKChartPositiveVolumeIndexIndicator; // inherited from NSObject
}

declare class TKChartPriceVolumeTrendIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartPriceVolumeTrendIndicator; // inherited from NSObject

	static new(): TKChartPriceVolumeTrendIndicator; // inherited from NSObject
}

declare class TKChartRangeBarSeries extends TKChartBarSeries {

	static alloc(): TKChartRangeBarSeries; // inherited from NSObject

	static new(): TKChartRangeBarSeries; // inherited from NSObject
}

declare class TKChartRangeColumnSeries extends TKChartColumnSeries {

	static alloc(): TKChartRangeColumnSeries; // inherited from NSObject

	static new(): TKChartRangeColumnSeries; // inherited from NSObject
}

declare class TKChartRangeDataPoint extends NSObject implements TKChartData {

	static alloc(): TKChartRangeDataPoint; // inherited from NSObject

	static dataPointWithXLowHigh(xValue: any, lowValue: any, highValue: any): TKChartRangeDataPoint;

	static dataPointWithYLowHigh(yValue: any, lowValue: any, highValue: any): TKChartRangeDataPoint;

	static new(): TKChartRangeDataPoint; // inherited from NSObject

	dataXValue: any;

	dataYValue: any;

	high: any;

	low: any;

	readonly area: number; // inherited from TKChartData

	readonly close: number; // inherited from TKChartData

	readonly dataName: string; // inherited from TKChartData

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly open: number; // inherited from TKChartData

	readonly signalYValue: any; // inherited from TKChartData

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly volume: number; // inherited from TKChartData

	readonly  // inherited from NSObjectProtocol

	constructor(o: { x: any; low: any; high: any; });

	constructor(o: { y: any; low: any; high: any; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithXLowHigh(xValue: any, lowValue: any, highValue: any): this;

	initWithYLowHigh(yValue: any, lowValue: any, highValue: any): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKChartRangeVisualPoint extends TKChartVisualPoint {

	static alloc(): TKChartRangeVisualPoint; // inherited from NSObject

	static new(): TKChartRangeVisualPoint; // inherited from NSObject

	high: number;

	low: number;

	constructor(o: { point: CGPoint; low: number; high: number; });

	initWithPointLowHigh(point: CGPoint, low: number, high: number): this;
}

declare class TKChartRapidAdaptiveVarianceIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartRapidAdaptiveVarianceIndicator; // inherited from NSObject

	static new(): TKChartRapidAdaptiveVarianceIndicator; // inherited from NSObject

	longPeriod: number;

	shortPeriod: number;
}

declare class TKChartRateOfChangeIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartRateOfChangeIndicator; // inherited from NSObject

	static new(): TKChartRateOfChangeIndicator; // inherited from NSObject

	period: number;
}

declare class TKChartRelativeMomentumIndex extends TKChartFinancialIndicator {

	static alloc(): TKChartRelativeMomentumIndex; // inherited from NSObject

	static new(): TKChartRelativeMomentumIndex; // inherited from NSObject

	momentum: number;

	period: number;
}

declare class TKChartRelativeStrengthIndex extends TKChartFinancialIndicator {

	static alloc(): TKChartRelativeStrengthIndex; // inherited from NSObject

	static new(): TKChartRelativeStrengthIndex; // inherited from NSObject

	period: number;
}

declare class TKChartRender extends CALayer {

	static alloc(): TKChartRender; // inherited from NSObject

	static layer(): TKChartRender; // inherited from CALayer

	static new(): TKChartRender; // inherited from NSObject

	readonly chart: TKChart;

	constructor(o: { chart: TKChart; });

	initWithChart(chart: TKChart): this;

	setup(): void;

	update(): void;
}

declare class TKChartScatterSeries extends TKChartSeries {

	static alloc(): TKChartScatterSeries; // inherited from NSObject

	static new(): TKChartScatterSeries; // inherited from NSObject

	marginForHitDetection: number;
}

declare class TKChartSelectionInfo extends NSObject implements NSCopying {

	static alloc(): TKChartSelectionInfo; // inherited from NSObject

	static hitTestInfoWithSeriesDataPointIndex(series: TKChartSeries, dataPointIndex: number): TKChartSelectionInfo;

	static hitTestInfoWithSeriesDataPointIndexDistance(series: TKChartSeries, dataPointIndex: number, distance: number): TKChartSelectionInfo;

	static new(): TKChartSelectionInfo; // inherited from NSObject

	readonly dataPoint: TKChartData;

	readonly dataPointIndex: number;

	readonly distance: number;

	readonly location: CGPoint;

	readonly series: TKChartSeries;

	constructor(o: { series: TKChartSeries; dataPointIndex: number; });

	constructor(o: { series: TKChartSeries; dataPointIndex: number; distance: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithSeriesDataPointIndex(series: TKChartSeries, dataPointIndex: number): this;

	initWithSeriesDataPointIndexDistance(series: TKChartSeries, dataPointIndex: number, distance: number): this;
}

declare const enum TKChartSelectionMode {

	None = 0,

	Single = 1,

	Multiple = 2
}

declare class TKChartSeries extends NSObject {

	static alloc(): TKChartSeries; // inherited from NSObject

	static new(): TKChartSeries; // inherited from NSObject

	hidden: boolean;

	readonly index: number;

	readonly isSelected: boolean;

	readonly items: NSArray<any>;

	readonly reuseIdentifier: string;

	selection: TKChartSeriesSelection;

	selectionMode: TKChartSeriesSelectionMode;

	sortMode: TKChartSeriesSortMode;

	stackInfo: TKChartStackInfo;

	readonly style: TKChartSeriesStyle;

	tag: number;

	title: string;

	visibleInLegend: boolean;

	readonly visiblePoints: NSArray<any>;

	readonly visiblePointsInternal: NSArray<any>;

	xAxis: TKChartAxis;

	yAxis: TKChartAxis;

	constructor(o: { items: NSArray<any>; });

	constructor(o: { items: NSArray<any>; forKeys: NSDictionary<any, any>; });

	constructor(o: { items: NSArray<any>; forKeys: NSDictionary<any, any>; reuseIdentifier: string; });

	constructor(o: { items: NSArray<any>; reuseIdentifier: string; });

	constructor(o: { items: NSArray<any>; xValueKey: string; yValueKey: string; });

	dataPointAtIndex(dataIndex: number): TKChartData;

	initWithItems(items: NSArray<any>): this;

	initWithItemsForKeys(items: NSArray<any>, keys: NSDictionary<any, any>): this;

	initWithItemsForKeysReuseIdentifier(items: NSArray<any>, keys: NSDictionary<any, any>, reuseIdentifier: string): this;

	initWithItemsReuseIdentifier(items: NSArray<any>, reuseIdentifier: string): this;

	initWithItemsXValueKeyYValueKey(items: NSArray<any>, xValueKey: string, yValueKey: string): this;

	pointIsSelected(index: number): boolean;

	prepareForReuse(): void;

	renderForChart(chart: TKChart): TKChartSeriesRender;

	visiblePointsForAxis(axis: TKChartAxis): NSArray<any>;
}

declare class TKChartSeriesRender extends TKChartRender {

	static alloc(): TKChartSeriesRender; // inherited from NSObject

	static layer(): TKChartSeriesRender; // inherited from CALayer

	static locationOfValueForAxisInRect(numericValue: number, axis: TKChartAxis, bounds: CGRect): number;

	static new(): TKChartSeriesRender; // inherited from NSObject

	readonly series: NSArray<any>;

	readonly seriesRenderStates: TKMutableArray;

	constructor(o: { chart: TKChart; forSeries: NSArray<any>; });

	addSeries(series: TKChartSeries): boolean;

	createVisualPointPointIndexInSeries(data: TKChartData, index: number, series: TKChartSeries): TKChartVisualPoint;

	hitTestForPoint(point: CGPoint): TKChartSelectionInfo;

	initWithChartForSeries(chart: TKChart, series: NSArray<any>): this;

	isCompatibleWithSeries(series: TKChartSeries): boolean;

	locationOfPointInSeries(data: TKChartData, series: TKChartSeries): CGPoint;

	locationOfXNumericValueInSeries(numericValue: number, series: TKChartSeries): number;

	locationOfYNumericValueInSeries(numericValue: number, series: TKChartSeries): number;

	pointFromDataPointIndexInSeries(point: TKChartData, index: number, series: TKChartSeries): TKChartVisualPoint;

	selectionWillChangeForSeriesAndPoint(series: TKChartSeries, pointIndex: number): void;
}

declare class TKChartSeriesRenderState extends NSObject {

	static alloc(): TKChartSeriesRenderState; // inherited from NSObject

	static new(): TKChartSeriesRenderState; // inherited from NSObject

	readonly index: number;

	readonly oldPoints: TKMutableArray;

	points: TKMutableArray;

	constructor(o: { index: number; });

	animationKeyPathForPointAtIndex(pointIndex: number): string;

	initWithIndex(index: number): this;
}

declare const enum TKChartSeriesSelection {

	NotSet = 0,

	None = 1,

	Series = 2,

	DataPoint = 3,

	DataPointMultiple = 4
}

declare const enum TKChartSeriesSelectionMode {

	None = 0,

	Series = 1,

	DataPoint = 2
}

declare const enum TKChartSeriesSortMode {

	None = 0,

	XAxis = 1,

	YAxis = 2
}

declare class TKChartSeriesStyle extends TKStyleNode {

	static alloc(): TKChartSeriesStyle; // inherited from NSObject

	static new(): TKChartSeriesStyle; // inherited from NSObject

	fill: TKFill;

	palette: TKChartPalette;

	paletteMode: TKChartSeriesStylePaletteMode;

	pointLabelStyle: TKChartPointLabelStyle;

	pointShape: TKShape;

	shapeMode: TKChartSeriesStyleShapeMode;

	shapePalette: TKChartPalette;

	stroke: TKStroke;
}

declare const enum TKChartSeriesStylePaletteMode {

	UseSeriesIndex = 0,

	UseItemIndex = 1
}

declare const enum TKChartSeriesStyleShapeMode {

	ShowOnMiddlePointsOnly = 0,

	AlwaysShow = 1
}

declare class TKChartSignalLineIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartSignalLineIndicator; // inherited from NSObject

	static new(): TKChartSignalLineIndicator; // inherited from NSObject

	readonly isSignalState: boolean;
}

declare class TKChartSimpleMovingAverageIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartSimpleMovingAverageIndicator; // inherited from NSObject

	static new(): TKChartSimpleMovingAverageIndicator; // inherited from NSObject

	period: number;
}

declare class TKChartSlowStochasticIndicator extends TKChartFastStochasticIndicator {

	static alloc(): TKChartSlowStochasticIndicator; // inherited from NSObject

	static new(): TKChartSlowStochasticIndicator; // inherited from NSObject
}

declare class TKChartSplineAreaSeries extends TKChartAreaSeries {

	static alloc(): TKChartSplineAreaSeries; // inherited from NSObject

	static new(): TKChartSplineAreaSeries; // inherited from NSObject
}

declare class TKChartSplineSeries extends TKChartLineSeries {

	static alloc(): TKChartSplineSeries; // inherited from NSObject

	static new(): TKChartSplineSeries; // inherited from NSObject
}

declare class TKChartStackInfo extends NSObject {

	static alloc(): TKChartStackInfo; // inherited from NSObject

	static new(): TKChartStackInfo; // inherited from NSObject

	stackID: any;

	stackMode: TKChartStackMode;

	constructor(o: { ID: any; withStackMode: TKChartStackMode; });

	initWithIDWithStackMode(aStackID: any, aStackMode: TKChartStackMode): this;
}

declare const enum TKChartStackMode {

	Stack = 0,

	Stack100 = 1
}

declare class TKChartStandardDeviationIndicator extends TKChartSimpleMovingAverageIndicator {

	static alloc(): TKChartStandardDeviationIndicator; // inherited from NSObject

	static new(): TKChartStandardDeviationIndicator; // inherited from NSObject
}

declare class TKChartStyle extends TKStyleNode {

	static alloc(): TKChartStyle; // inherited from NSObject

	static new(): TKChartStyle; // inherited from NSObject
}

declare class TKChartTRIXIndicator extends TKChartSimpleMovingAverageIndicator {

	static alloc(): TKChartTRIXIndicator; // inherited from NSObject

	static new(): TKChartTRIXIndicator; // inherited from NSObject
}

declare const enum TKChartTitlePosition {

	Left = 0,

	Right = 1,

	Top = 2,

	Bottom = 3
}

declare class TKChartTitleStyle extends TKStyleNode {

	static alloc(): TKChartTitleStyle; // inherited from NSObject

	static new(): TKChartTitleStyle; // inherited from NSObject
}

declare class TKChartTitleView extends UILabel {

	static alloc(): TKChartTitleView; // inherited from NSObject

	static appearance(): TKChartTitleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKChartTitleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKChartTitleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKChartTitleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKChartTitleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKChartTitleView; // inherited from UIAppearance

	static new(): TKChartTitleView; // inherited from NSObject

	position: TKChartTitlePosition;

	style: TKChartTitleStyle;
}

declare class TKChartTrackball extends NSObject {

	static alloc(): TKChartTrackball; // inherited from NSObject

	static new(): TKChartTrackball; // inherited from NSObject

	hideMode: TKChartTrackballHideMode;

	readonly isVisible: boolean;

	readonly line: TKChartTrackballLineAnnotation;

	marginForHitDetection: number;

	minimumPressDuration: number;

	orientation: TKChartTrackballOrientation;

	snapMode: TKChartTrackballSnapMode;

	readonly tooltip: TKChartTrackballTooltipAnnotation;

	constructor(o: { chart: TKChart; });

	hide(): void;

	initWithChart(chart: TKChart): this;

	showAtPoint(point: CGPoint): void;
}

declare const enum TKChartTrackballHideMode {

	OnTouchUp = 0,

	OnSecondTouch = 1
}

declare class TKChartTrackballLineAnnotation extends TKChartAnnotation {

	static alloc(): TKChartTrackballLineAnnotation; // inherited from NSObject

	static new(): TKChartTrackballLineAnnotation; // inherited from NSObject

	selectedPoints: NSArray<any>;

	style: TKChartCrossLineAnnotationStyle;

	constructor(o: { trackball: TKChartTrackball; });

	initWithTrackball(trackball: TKChartTrackball): this;

	updateContent(): void;
}

declare const enum TKChartTrackballOrientation {

	Horizontal = 0,

	Vertical = 1
}

declare const enum TKChartTrackballPinPosition {

	None = 0,

	Left = 1,

	Right = 2,

	Top = 3,

	Bottom = 4
}

declare const enum TKChartTrackballSnapMode {

	ClosestPoint = 0,

	AllClosestPoints = 1
}

declare class TKChartTrackballTooltipAnnotation extends TKChartBalloonAnnotation {

	static alloc(): TKChartTrackballTooltipAnnotation; // inherited from NSObject

	static new(): TKChartTrackballTooltipAnnotation; // inherited from NSObject

	pinPosition: TKChartTrackballPinPosition;

	constructor(o: { trackball: TKChartTrackball; });

	initWithTrackball(trackball: TKChartTrackball): this;

	updateContent(): void;
}

declare class TKChartTriangularMovingAverageIndicator extends TKChartSimpleMovingAverageIndicator {

	static alloc(): TKChartTriangularMovingAverageIndicator; // inherited from NSObject

	static new(): TKChartTriangularMovingAverageIndicator; // inherited from NSObject
}

declare class TKChartTrueRangeIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartTrueRangeIndicator; // inherited from NSObject

	static new(): TKChartTrueRangeIndicator; // inherited from NSObject
}

declare class TKChartTypicalPriceIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartTypicalPriceIndicator; // inherited from NSObject

	static new(): TKChartTypicalPriceIndicator; // inherited from NSObject
}

declare class TKChartUltimateOscillator extends TKChartFinancialIndicator {

	static alloc(): TKChartUltimateOscillator; // inherited from NSObject

	static new(): TKChartUltimateOscillator; // inherited from NSObject

	longPeriod: number;

	middlePeriod: number;

	shortPeriod: number;
}

declare class TKChartViewAnnotation extends TKChartPointAnnotation {

	static alloc(): TKChartViewAnnotation; // inherited from NSObject

	static new(): TKChartViewAnnotation; // inherited from NSObject

	view: UIView;

	constructor(o: { view: UIView; });

	constructor(o: { view: UIView; point: TKChartData; forSeries: TKChartSeries; });

	constructor(o: { view: UIView; point: TKChartData; forXAxis: TKChartAxis; forYAxis: TKChartAxis; });

	constructor(o: { view: UIView; x: any; y: any; forSeries: TKChartSeries; });

	constructor(o: { view: UIView; x: any; y: any; forXAxis: TKChartAxis; forYAxis: TKChartAxis; });

	initWithView(aView: UIView): this;

	initWithViewPointForSeries(aView: UIView, point: TKChartData, series: TKChartSeries): this;

	initWithViewPointForXAxisForYAxis(aView: UIView, point: TKChartData, xAxis: TKChartAxis, yAxis: TKChartAxis): this;

	initWithViewXYForSeries(aView: UIView, xValue: any, yValue: any, series: TKChartSeries): this;

	initWithViewXYForXAxisForYAxis(aView: UIView, xValue: any, yValue: any, xAxis: TKChartAxis, yAxis: TKChartAxis): this;
}

declare class TKChartViewController extends UIViewController implements TKChartDataSource, TKChartDelegate {

	static alloc(): TKChartViewController; // inherited from NSObject

	static new(): TKChartViewController; // inherited from NSObject

	readonly chart: TKChart;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	chartAnimationForSeriesWithStateInRect(chart: TKChart, series: TKChartSeries, state: TKChartSeriesRenderState, rect: CGRect): CAAnimation;

	chartAttributedTextForAxisValueAtIndex(chart: TKChart, axis: TKChartAxis, value: any, index: number): NSAttributedString;

	chartDataPointAtIndexForSeriesAtIndex(chart: TKChart, dataIndex: number, seriesIndex: number): TKChartData;

	chartDataPointsForSeriesAtIndex(chart: TKChart, seriesIndex: number): NSArray<any>;

	chartDidDeselectPointInSeriesAtIndex(chart: TKChart, point: TKChartData, series: TKChartSeries, index: number): void;

	chartDidDeselectSeries(chart: TKChart, series: TKChartSeries): void;

	chartDidPan(chart: TKChart): void;

	chartDidSelectPointInSeriesAtIndex(chart: TKChart, point: TKChartData, series: TKChartSeries, index: number): void;

	chartDidSelectSeries(chart: TKChart, series: TKChartSeries): void;

	chartDidTapOnLegendItem(chart: TKChart, legendItem: TKChartLegendItem): void;

	chartDidZoom(chart: TKChart): void;

	chartLabelForDataPointPropertyInSeriesAtIndex(chart: TKChart, dataPoint: TKChartData, propertyName: string, series: TKChartSeries, dataIndex: number): TKChartPointLabel;

	chartLegendItemForSeriesAtIndex(chart: TKChart, series: TKChartSeries, index: number): TKChartLegendItem;

	chartNumberOfDataPointsForSeriesAtIndex(chart: TKChart, seriesIndex: number): number;

	chartPaletteItemForPointInSeries(chart: TKChart, index: number, series: TKChartSeries): TKChartPaletteItem;

	chartPaletteItemForSeriesAtIndex(chart: TKChart, series: TKChartSeries, index: number): TKChartPaletteItem;

	chartPointLabelRenderForSeriesWithRender(chart: TKChart, series: TKChartSeries, render: TKChartSeriesRender): TKChartPointLabelRender;

	chartShapeForSeriesAtIndex(chart: TKChart, series: TKChartSeries, index: number): TKShape;

	chartTextForAxisValueAtIndex(chart: TKChart, axis: TKChartAxis, value: any, index: number): string;

	chartTextForLabelAtPointPropertyInSeriesAtIndex(chart: TKChart, dataPoint: TKChartData, propertyName: string, series: TKChartSeries, dataIndex: number): string;

	chartTrackballDidHideSelection(chart: TKChart, selection: NSArray<any>): void;

	chartTrackballDidTrackSelection(chart: TKChart, selection: NSArray<any>): void;

	chartUpdateLegendItemForSeriesAtIndex(chart: TKChart, item: TKChartLegendItem, series: TKChartSeries, index: number): void;

	chartWillPan(chart: TKChart): void;

	chartWillZoom(chart: TKChart): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSeriesForChart(chart: TKChart): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	seriesForChartAtIndex(chart: TKChart, index: number): TKChartSeries;
}

declare class TKChartVisualPoint extends NSObject implements NSCopying, UIDynamicItem {

	static alloc(): TKChartVisualPoint; // inherited from NSObject

	static new(): TKChartVisualPoint; // inherited from NSObject

	readonly CGPoint: CGPoint;

	animator: UIDynamicAnimator;

	readonly doubleValue: number;

	opacity: number;

	scaleFactor: number;

	x: number;

	y: number;

	readonly bounds: CGRect; // inherited from UIDynamicItem

	center: CGPoint; // inherited from UIDynamicItem

	readonly collisionBoundingPath: UIBezierPath; // inherited from UIDynamicItem

	readonly collisionBoundsType: UIDynamicItemCollisionBoundsType; // inherited from UIDynamicItem

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	transform: CGAffineTransform; // inherited from UIDynamicItem

	readonly  // inherited from NSObjectProtocol

	constructor(o: { point: CGPoint; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithPoint(point: CGPoint): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKChartWeightedCloseIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartWeightedCloseIndicator; // inherited from NSObject

	static new(): TKChartWeightedCloseIndicator; // inherited from NSObject
}

declare class TKChartWeightedMovingAverageIndicator extends TKChartSimpleMovingAverageIndicator {

	static alloc(): TKChartWeightedMovingAverageIndicator; // inherited from NSObject

	static new(): TKChartWeightedMovingAverageIndicator; // inherited from NSObject
}

declare class TKChartWilliamsPercentIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartWilliamsPercentIndicator; // inherited from NSObject

	static new(): TKChartWilliamsPercentIndicator; // inherited from NSObject

	period: number;
}

declare const enum TKChartZoomMode {

	Symmetric = 0,

	SingleSide = 1
}

declare class TKCheckShape extends TKShape {

	static alloc(): TKCheckShape; // inherited from NSObject

	static new(): TKCheckShape; // inherited from NSObject
}

declare class TKCheckView extends TKView {

	static alloc(): TKCheckView; // inherited from NSObject

	static appearance(): TKCheckView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCheckView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCheckView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCheckView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCheckView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCheckView; // inherited from UIAppearance

	static new(): TKCheckView; // inherited from NSObject

	checkFill: TKFill;

	checkShape: TKShape;

	checkStroke: TKStroke;

	isChecked: boolean;
}

declare class TKCollectionViewCell extends UICollectionViewCell {

	static alloc(): TKCollectionViewCell; // inherited from NSObject

	static appearance(): TKCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCollectionViewCell; // inherited from UIAppearance

	static new(): TKCollectionViewCell; // inherited from NSObject

	readonly label: UILabel;
}

interface TKCoreLayout extends NSObjectProtocol {

	alignmentMode?: TKCoreLayoutAlignmentMode;

	desiredSize: CGSize;

	stretchMode?: TKCoreLayoutStretchMode;

	arrange(rect: CGRect): void;

	itemWasAddedInLayout?(layout: TKCoreLayout): void;

	itemWasRemoved?(): void;

	measure(size: CGSize): CGSize;
}
declare var TKCoreLayout: {

	prototype: TKCoreLayout;
};

declare const enum TKCoreLayoutAlignmentMode {

	Left = 1,

	Top = 2,

	Right = 4,

	Bottom = 8,

	HorizontalCenter = 16,

	VerticalCenter = 32
}

declare class TKCoreLayoutItem extends NSObject implements TKCoreLayout {

	static alloc(): TKCoreLayoutItem; // inherited from NSObject

	static new(): TKCoreLayoutItem; // inherited from NSObject

	readonly content: any;

	margin: UIEdgeInsets;

	sizingMode: TKCoreLayoutSizingMode;

	alignmentMode: TKCoreLayoutAlignmentMode; // inherited from TKCoreLayout

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly desiredSize: CGSize; // inherited from TKCoreLayout

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	stretchMode: TKCoreLayoutStretchMode; // inherited from TKCoreLayout

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { layer: CALayer; });

	constructor(o: { layout: TKCoreLayout; });

	constructor(o: { view: UIView; });

	arrange(rect: CGRect): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithLayer(aLayer: CALayer): this;

	initWithLayout(aLayout: TKCoreLayout): this;

	initWithView(aView: UIView): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	itemWasAddedInLayout(layout: TKCoreLayout): void;

	itemWasRemoved(): void;

	measure(size: CGSize): CGSize;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum TKCoreLayoutSizingMode {

	Fixed = 0,

	Fit = 1
}

declare const enum TKCoreLayoutStretchMode {

	None = 0,

	Horizontal = 1,

	Vertical = 2
}

declare class TKCoreStackLayout extends NSObject implements NSFastEnumeration, TKCoreLayout {

	static alloc(): TKCoreStackLayout; // inherited from NSObject

	static new(): TKCoreStackLayout; // inherited from NSObject

	readonly count: number;

	itemOrder: TKCoreStackLayoutItemOrder;

	itemSpacing: number;

	readonly items: NSArray<any>;

	orientation: TKCoreStackLayoutOrientation;

	alignmentMode: TKCoreLayoutAlignmentMode; // inherited from TKCoreLayout

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly desiredSize: CGSize; // inherited from TKCoreLayout

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	stretchMode: TKCoreLayoutStretchMode; // inherited from TKCoreLayout

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol
	[Symbol.iterator](): Iterator<any>;

	addItem(item: TKCoreLayout): boolean;

	arrange(rect: CGRect): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexOfItem(layoutItem: TKCoreLayout): number;

	insertItemAtIndex(item: TKCoreLayout, index: number): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	itemAtIndex(index: number): TKCoreLayout;

	itemWasAddedInLayout(layout: TKCoreLayout): void;

	itemWasRemoved(): void;

	lastItem(): TKCoreLayout;

	measure(size: CGSize): CGSize;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAllItems(): void;

	removeItem(item: TKCoreLayout): boolean;

	removeItemAtIndex(index: number): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum TKCoreStackLayoutItemOrder {

	Normal = 0,

	Reverse = 1
}

declare const enum TKCoreStackLayoutOrientation {

	Horizontal = 0,

	Vertical = 1
}

declare class TKCoreStackLayoutView extends UIScrollView {

	static alloc(): TKCoreStackLayoutView; // inherited from NSObject

	static appearance(): TKCoreStackLayoutView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCoreStackLayoutView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCoreStackLayoutView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCoreStackLayoutView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCoreStackLayoutView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCoreStackLayoutView; // inherited from UIAppearance

	static new(): TKCoreStackLayoutView; // inherited from NSObject

	stack: TKCoreStackLayout;
}

declare class TKDataForm extends UIView {

	static alloc(): TKDataForm; // inherited from NSObject

	static appearance(): TKDataForm; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataForm; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataForm; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataForm; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataForm; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataForm; // inherited from UIAppearance

	static new(): TKDataForm; // inherited from NSObject

	allowScroll: boolean;

	commitMode: TKDataFormCommitMode;

	dataSource: TKDataFormDataSource;

	delegate: TKDataFormDelegate;

	groupSpacing: number;

	readOnly: boolean;

	validationMode: TKDataFormValidationMode;

	constructor(o: { JSONAnnotationsResource: string; ofType: string; });

	commit(): void;

	editorValueChanged(editor: TKDataFormEditor): void;

	groupViewForGroup(group: TKEntityPropertyGroup): TKEntityPropertyGroupView;

	hasValidationErrors(): boolean;

	initWithJSONAnnotationsResourceOfType(resourceName: string, type: string): this;

	registerEditorForProperty(editorClass: typeof NSObject, propertyName: string): void;

	registerEditorForPropertyOfClass(editorClass: typeof NSObject, propertyClass: typeof NSObject): void;

	registerEditorForPropertyOfType(editorClass: typeof NSObject, propertyType: TKEntityPropertyType): void;

	reloadData(): void;

	setEditorOnFocus(editor: TKDataFormEditor): void;

	setupWithJSONAnnotationsString(str: string): void;

	update(): void;

	updateEditorForProperty(property: TKEntityProperty): void;
}

declare class TKDataFormAccessoryView extends UIView {

	static alloc(): TKDataFormAccessoryView; // inherited from NSObject

	static appearance(): TKDataFormAccessoryView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormAccessoryView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormAccessoryView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormAccessoryView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormAccessoryView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormAccessoryView; // inherited from UIAppearance

	static new(): TKDataFormAccessoryView; // inherited from NSObject

	readonly doneBarItem: UIBarButtonItem;

	readonly nextBarItem: UIBarButtonItem;

	readonly previousBarItem: UIBarButtonItem;

	readonly toolbar: UIToolbar;
}

declare class TKDataFormAutoCompleteInlineEditor extends TKDataFormEditor {

	static alloc(): TKDataFormAutoCompleteInlineEditor; // inherited from NSObject

	static appearance(): TKDataFormAutoCompleteInlineEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormAutoCompleteInlineEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormAutoCompleteInlineEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormAutoCompleteInlineEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormAutoCompleteInlineEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormAutoCompleteInlineEditor; // inherited from UIAppearance

	static new(): TKDataFormAutoCompleteInlineEditor; // inherited from NSObject

	autoCompleteView: TKAutoCompleteTextView;

	dataSource: TKDataSource;

	options: NSArray<any>;

	selectedItem: string;
}

declare class TKDataFormAutocompleteController extends TKAutoCompleteController implements TKAutoCompleteDelegate {

	static alloc(): TKDataFormAutocompleteController; // inherited from NSObject

	static new(): TKDataFormAutocompleteController; // inherited from NSObject

	readonly dataSource: TKDataSource;

	editor: TKDataFormAutocompleteEditor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	autoCompleteDidAddToken(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): void;

	autoCompleteDidAutoComplete(autocomplete: TKAutoCompleteTextView, completion: string): void;

	autoCompleteDidRemoveToken(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): void;

	autoCompleteDidSelectToken(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): void;

	autoCompleteDidStartEditing(autocomplete: TKAutoCompleteTextView): void;

	autoCompleteShouldAddToken(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): boolean;

	autoCompleteShouldRemoveToken(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): boolean;

	autoCompleteSuggestionListUpdated(autocomplete: TKAutoCompleteTextView, suggestionList: NSArray<TKAutoCompleteToken>): void;

	autoCompleteViewForToken(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): TKAutoCompleteTokenView;

	autoCompleteWillShowSuggestionList(autocomplete: TKAutoCompleteTextView, suggestionList: NSArray<TKAutoCompleteToken>): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKDataFormAutocompleteEditor extends TKDataFormViewControllerEditor {

	static alloc(): TKDataFormAutocompleteEditor; // inherited from NSObject

	static appearance(): TKDataFormAutocompleteEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormAutocompleteEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormAutocompleteEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormAutocompleteEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormAutocompleteEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormAutocompleteEditor; // inherited from UIAppearance

	static new(): TKDataFormAutocompleteEditor; // inherited from NSObject

	readonly accessoryImageView: UIImageView;

	options: NSArray<any>;

	placeholder: string;

	selectedItem: string;

	readonly selectedOptionLabel: TKLabel;

	showAccessoryImage: boolean;
}

declare const enum TKDataFormCommitMode {

	Immediate = 0,

	OnLostFocus = 1,

	Manual = 2
}

interface TKDataFormConverter extends NSObjectProtocol {

	convertFrom(source: any): any;

	convertTo(source: any): any;
}
declare var TKDataFormConverter: {

	prototype: TKDataFormConverter;
};

declare class TKDataFormCustomEditor extends TKDataFormEditor {

	static alloc(): TKDataFormCustomEditor; // inherited from NSObject

	static appearance(): TKDataFormCustomEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormCustomEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormCustomEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormCustomEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormCustomEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormCustomEditor; // inherited from UIAppearance

	static new(): TKDataFormCustomEditor; // inherited from NSObject

	delegate: TKDataFormCustomEditorDelegate;

	readonly editorView: UIView;

	notifyValueChange(): void;
}

interface TKDataFormCustomEditorDelegate extends NSObjectProtocol {

	editorShouldApplyValueEditorView(editor: TKDataFormCustomEditor, value: NSObject, view: UIView): void;

	editorWillCreateView(editor: TKDataFormCustomEditor): UIView;

	editorWillReturnValueEditorView(editor: TKDataFormCustomEditor, view: UIView): NSObject;
}
declare var TKDataFormCustomEditorDelegate: {

	prototype: TKDataFormCustomEditorDelegate;
};

interface TKDataFormDataSource extends NSObjectProtocol {

	dataFormEditorClassForProperty?(dataForm: TKDataForm, property: TKEntityProperty): typeof NSObject;

	dataFormGroupAtIndex(dataForm: TKDataForm, groupIndex: number): TKEntityPropertyGroup;

	dataFormNumberOfPropertiesInGroup(dataForm: TKDataForm, groupIndex: number): number;

	dataFormPropertyInGroupAtIndex(dataForm: TKDataForm, groupIndex: number, propertyIndex: number): TKEntityProperty;

	dataFormSetValueForProperty(dataForm: TKDataForm, value: any, property: TKEntityProperty): boolean;

	dataFormTitleForHeaderInGroup?(dataForm: TKDataForm, groupIndex: number): string;

	indexOfGroupInDataForm(group: TKEntityPropertyGroup): number;

	numberOfGroupsInDataForm?(dataForm: TKDataForm): number;
}
declare var TKDataFormDataSource: {

	prototype: TKDataFormDataSource;
};

declare class TKDataFormDatePickerEditor extends TKDataFormInlineEditor {

	static alloc(): TKDataFormDatePickerEditor; // inherited from NSObject

	static appearance(): TKDataFormDatePickerEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormDatePickerEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormDatePickerEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormDatePickerEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormDatePickerEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormDatePickerEditor; // inherited from UIAppearance

	static new(): TKDataFormDatePickerEditor; // inherited from NSObject

	dateFormatter: NSDateFormatter;

	readonly datePicker: UIDatePicker;

	placeholder: string;
}

declare class TKDataFormDecimalEditor extends TKDataFormTextFieldEditor {

	static alloc(): TKDataFormDecimalEditor; // inherited from NSObject

	static appearance(): TKDataFormDecimalEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormDecimalEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormDecimalEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormDecimalEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormDecimalEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormDecimalEditor; // inherited from UIAppearance

	static new(): TKDataFormDecimalEditor; // inherited from NSObject
}

interface TKDataFormDelegate extends NSObjectProtocol {

	dataFormCreateEditorForProperty?(dataForm: TKDataForm, property: TKEntityProperty): TKDataFormEditor;

	dataFormDidCollapseGroupView?(dataForm: TKDataForm, groupView: TKEntityPropertyGroupView): void;

	dataFormDidCommitProperty?(dataForm: TKDataForm, property: TKEntityProperty): void;

	dataFormDidDeselectEditorForProperty?(dataForm: TKDataForm, editor: TKDataFormEditor, property: TKEntityProperty): void;

	dataFormDidEditProperty?(dataForm: TKDataForm, property: TKEntityProperty): void;

	dataFormDidExpandGroupView?(dataForm: TKDataForm, groupView: TKEntityPropertyGroupView): void;

	dataFormDidFinishEditorIntitialization?(dataForm: TKDataForm): void;

	dataFormDidSelectEditorForProperty?(dataForm: TKDataForm, editor: TKDataFormEditor, property: TKEntityProperty): void;

	dataFormDidValidatePropertyEditor?(dataForm: TKDataForm, property: TKEntityProperty, editor: TKDataFormEditor): void;

	dataFormHeightForEditorInGroupAtIndex?(dataForm: TKDataForm, groupIndex: number, editorIndex: number): number;

	dataFormHeightForHeaderInGroup?(dataForm: TKDataForm, groupIndex: number): number;

	dataFormInitViewControllerForEditor?(dataForm: TKDataForm, viewController: UIViewController, editor: TKDataFormViewControllerEditor): void;

	dataFormSetupEditorForProperty?(dataForm: TKDataForm, editor: TKDataFormEditor, property: TKEntityProperty): void;

	dataFormUpdateEditorForProperty?(dataForm: TKDataForm, editor: TKDataFormEditor, property: TKEntityProperty): void;

	dataFormUpdateGroupViewForGroupAtIndex?(dataForm: TKDataForm, groupView: TKEntityPropertyGroupView, groupIndex: number): void;

	dataFormValidatePropertyEditor?(dataForm: TKDataForm, property: TKEntityProperty, editor: TKDataFormEditor): boolean;

	dataFormViewForHeaderInGroup?(dataForm: TKDataForm, groupIndex: number): TKEntityPropertyGroupTitleView;

	dataFormWillCommitProperty?(dataForm: TKDataForm, property: TKEntityProperty): boolean;

	inputAccessoryViewForDataForm?(dataForm: TKDataForm): TKDataFormAccessoryView;
}
declare var TKDataFormDelegate: {

	prototype: TKDataFormDelegate;
};

declare class TKDataFormEditor extends UIView {

	static alloc(): TKDataFormEditor; // inherited from NSObject

	static appearance(): TKDataFormEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormEditor; // inherited from UIAppearance

	static new(): TKDataFormEditor; // inherited from NSObject

	readonly editor: UIView;

	enabled: boolean;

	readonly feedbackImageView: TKImageView;

	readonly feedbackLabel: UILabel;

	readonly gridLayout: TKGridLayout;

	readonly imageView: TKImageView;

	readonly isTextEditor: boolean;

	owner: TKDataForm;

	property: TKEntityProperty;

	readonly selected: boolean;

	selectedView: TKView;

	readonly style: TKDataFormEditorStyle;

	readonly textLabel: TKLabel;

	value: any;

	constructor(o: { property: TKEntityProperty; });

	constructor(o: { property: TKEntityProperty; owner: TKDataForm; });

	initWithProperty(property: TKEntityProperty): this;

	initWithPropertyOwner(property: TKEntityProperty, owner: TKDataForm): this;

	update(): void;

	updateControlValue(): void;
}

declare class TKDataFormEditorStyle extends TKStyleNode {

	static alloc(): TKDataFormEditorStyle; // inherited from NSObject

	static new(): TKDataFormEditorStyle; // inherited from NSObject

	accessoryArrowSize: CGSize;

	accessoryArrowStroke: TKStroke;

	editorOffset: UIOffset;

	feedbackImageSize: CGSize;

	feedbackImageViewOffset: UIOffset;

	feedbackLabelOffset: UIOffset;

	fill: TKFill;

	imageViewOffset: UIOffset;

	imageViewSize: CGSize;

	insets: UIEdgeInsets;

	separatorColor: TKFill;

	separatorLeadingSpace: number;

	separatorTrailingSpace: number;

	stroke: TKStroke;

	textLabelDisplayMode: TKDataFormEditorTextLabelDisplayMode;

	textLabelOffset: UIOffset;
}

declare const enum TKDataFormEditorTextLabelDisplayMode {

	Show = 0,

	Hidden = 1
}

declare class TKDataFormEmailEditor extends TKDataFormTextFieldEditor {

	static alloc(): TKDataFormEmailEditor; // inherited from NSObject

	static appearance(): TKDataFormEmailEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormEmailEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormEmailEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormEmailEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormEmailEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormEmailEditor; // inherited from UIAppearance

	static new(): TKDataFormEmailEditor; // inherited from NSObject
}

declare class TKDataFormEmailValidator extends TKDataFormPropertyValidator {

	static alloc(): TKDataFormEmailValidator; // inherited from NSObject

	static new(): TKDataFormEmailValidator; // inherited from NSObject
}

declare class TKDataFormEntityDataSource extends TKEntity implements TKDataFormDataSource {

	static alloc(): TKDataFormEntityDataSource; // inherited from NSObject

	static entityWithObject(sourceObject: NSObject): TKDataFormEntityDataSource; // inherited from TKEntity

	static new(): TKDataFormEntityDataSource; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dataFormEditorClassForProperty(dataForm: TKDataForm, property: TKEntityProperty): typeof NSObject;

	dataFormGroupAtIndex(dataForm: TKDataForm, groupIndex: number): TKEntityPropertyGroup;

	dataFormNumberOfPropertiesInGroup(dataForm: TKDataForm, groupIndex: number): number;

	dataFormPropertyInGroupAtIndex(dataForm: TKDataForm, groupIndex: number, propertyIndex: number): TKEntityProperty;

	dataFormSetValueForProperty(dataForm: TKDataForm, value: any, property: TKEntityProperty): boolean;

	dataFormTitleForHeaderInGroup(dataForm: TKDataForm, groupIndex: number): string;

	indexOfGroupInDataForm(group: TKEntityPropertyGroup): number;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfGroupsInDataForm(dataForm: TKDataForm): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKDataFormGroupTitleStyle extends TKStyleNode {

	static alloc(): TKDataFormGroupTitleStyle; // inherited from NSObject

	static new(): TKDataFormGroupTitleStyle; // inherited from NSObject

	fill: TKFill;

	insets: UIEdgeInsets;

	separatorColor: TKFill;

	separatorLeadingSpace: number;

	separatorTrailingSpace: number;

	stroke: TKStroke;
}

declare class TKDataFormInlineEditor extends TKDataFormEditor {

	static alloc(): TKDataFormInlineEditor; // inherited from NSObject

	static appearance(): TKDataFormInlineEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormInlineEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormInlineEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormInlineEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormInlineEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormInlineEditor; // inherited from UIAppearance

	static new(): TKDataFormInlineEditor; // inherited from NSObject

	readonly accessoryImageView: UIImageView;

	displayMode: TKDataFormInlineEditorDisplayMode;

	readonly editorValueLabel: TKLabel;

	showAccessoryImage: boolean;
}

declare const enum TKDataFormInlineEditorDisplayMode {

	Inline = 0,

	Modal = 1
}

declare class TKDataFormMaximumLengthValidator extends TKDataFormPropertyValidator {

	static alloc(): TKDataFormMaximumLengthValidator; // inherited from NSObject

	static new(): TKDataFormMaximumLengthValidator; // inherited from NSObject

	maximumLegth: number;

	constructor(o: { maximumLength: number; });

	initWithMaximumLength(maximumLength: number): this;
}

declare class TKDataFormMinimumLengthValidator extends TKDataFormPropertyValidator {

	static alloc(): TKDataFormMinimumLengthValidator; // inherited from NSObject

	static new(): TKDataFormMinimumLengthValidator; // inherited from NSObject

	minimumLength: number;

	constructor(o: { minimumLength: number; });

	initWithMinimumLength(minimumLength: number): this;
}

declare class TKDataFormMultilineTextEditor extends TKDataFormEditor implements UITextViewDelegate {

	static alloc(): TKDataFormMultilineTextEditor; // inherited from NSObject

	static appearance(): TKDataFormMultilineTextEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormMultilineTextEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormMultilineTextEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormMultilineTextEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormMultilineTextEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormMultilineTextEditor; // inherited from UIAppearance

	static new(): TKDataFormMultilineTextEditor; // inherited from NSObject

	dynamicHeight: boolean;

	maxDynamicHeight: number;

	readonly textView: UITextView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	textViewDidBeginEditing(textView: UITextView): void;

	textViewDidChange(textView: UITextView): void;

	textViewDidChangeSelection(textView: UITextView): void;

	textViewDidEndEditing(textView: UITextView): void;

	textViewShouldBeginEditing(textView: UITextView): boolean;

	textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

	textViewShouldEndEditing(textView: UITextView): boolean;

	textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

	textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

	textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class TKDataFormNamePhoneEditor extends TKDataFormTextFieldEditor {

	static alloc(): TKDataFormNamePhoneEditor; // inherited from NSObject

	static appearance(): TKDataFormNamePhoneEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormNamePhoneEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormNamePhoneEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormNamePhoneEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormNamePhoneEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormNamePhoneEditor; // inherited from UIAppearance

	static new(): TKDataFormNamePhoneEditor; // inherited from NSObject
}

declare class TKDataFormNonEmptyValidator extends TKDataFormPropertyValidator {

	static alloc(): TKDataFormNonEmptyValidator; // inherited from NSObject

	static new(): TKDataFormNonEmptyValidator; // inherited from NSObject
}

declare class TKDataFormNumberEditor extends TKDataFormTextFieldEditor {

	static alloc(): TKDataFormNumberEditor; // inherited from NSObject

	static appearance(): TKDataFormNumberEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormNumberEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormNumberEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormNumberEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormNumberEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormNumberEditor; // inherited from UIAppearance

	static new(): TKDataFormNumberEditor; // inherited from NSObject

	formatter: NSNumberFormatter;
}

declare class TKDataFormOptionsEditor extends TKDataFormViewControllerEditor {

	static alloc(): TKDataFormOptionsEditor; // inherited from NSObject

	static appearance(): TKDataFormOptionsEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormOptionsEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormOptionsEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormOptionsEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormOptionsEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormOptionsEditor; // inherited from UIAppearance

	static new(): TKDataFormOptionsEditor; // inherited from NSObject

	readonly accessoryImageView: UIImageView;

	options: NSArray<any>;

	selectedIndex: number;

	readonly selectedOptionLabel: TKLabel;

	showAccessoryImage: boolean;
}

declare class TKDataFormOptionsViewController extends UITableViewController {

	static alloc(): TKDataFormOptionsViewController; // inherited from NSObject

	static new(): TKDataFormOptionsViewController; // inherited from NSObject

	editor: TKDataFormOptionsEditor;

	items: NSArray<any>;
}

declare class TKDataFormPasswordEditor extends TKDataFormTextFieldEditor {

	static alloc(): TKDataFormPasswordEditor; // inherited from NSObject

	static appearance(): TKDataFormPasswordEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormPasswordEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormPasswordEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormPasswordEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormPasswordEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormPasswordEditor; // inherited from UIAppearance

	static new(): TKDataFormPasswordEditor; // inherited from NSObject
}

declare class TKDataFormPhoneEditor extends TKDataFormTextFieldEditor {

	static alloc(): TKDataFormPhoneEditor; // inherited from NSObject

	static appearance(): TKDataFormPhoneEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormPhoneEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormPhoneEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormPhoneEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormPhoneEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormPhoneEditor; // inherited from UIAppearance

	static new(): TKDataFormPhoneEditor; // inherited from NSObject
}

declare class TKDataFormPhoneValidator extends TKDataFormPropertyValidator {

	static alloc(): TKDataFormPhoneValidator; // inherited from NSObject

	static new(): TKDataFormPhoneValidator; // inherited from NSObject
}

declare class TKDataFormPickerViewEditor extends TKDataFormInlineEditor {

	static alloc(): TKDataFormPickerViewEditor; // inherited from NSObject

	static appearance(): TKDataFormPickerViewEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormPickerViewEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormPickerViewEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormPickerViewEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormPickerViewEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormPickerViewEditor; // inherited from UIAppearance

	static new(): TKDataFormPickerViewEditor; // inherited from NSObject

	options: NSArray<any>;

	readonly pickerView: UIPickerView;

	selectedIndex: number;
}

declare class TKDataFormPropertyValidator extends NSObject implements TKDataFormValidator {

	static alloc(): TKDataFormPropertyValidator; // inherited from NSObject

	static new(): TKDataFormPropertyValidator; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	errorMessage: string; // inherited from TKDataFormValidator

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	positiveMessage: string; // inherited from TKDataFormValidator

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	validateProperty(property: TKEntityProperty): boolean;
}

declare class TKDataFormRangeValidator extends TKDataFormPropertyValidator {

	static alloc(): TKDataFormRangeValidator; // inherited from NSObject

	static new(): TKDataFormRangeValidator; // inherited from NSObject

	range: TKRange;

	constructor(o: { range: TKRange; });

	initWithRange(range: TKRange): this;
}

declare class TKDataFormSegmentedEditor extends TKDataFormEditor {

	static alloc(): TKDataFormSegmentedEditor; // inherited from NSObject

	static appearance(): TKDataFormSegmentedEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormSegmentedEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormSegmentedEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormSegmentedEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormSegmentedEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormSegmentedEditor; // inherited from UIAppearance

	static new(): TKDataFormSegmentedEditor; // inherited from NSObject

	options: NSArray<any>;

	readonly segmentedControl: UISegmentedControl;

	selectedIndex: number;
}

declare class TKDataFormSliderEditor extends TKDataFormEditor {

	static alloc(): TKDataFormSliderEditor; // inherited from NSObject

	static appearance(): TKDataFormSliderEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormSliderEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormSliderEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormSliderEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormSliderEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormSliderEditor; // inherited from UIAppearance

	static new(): TKDataFormSliderEditor; // inherited from NSObject

	readonly sliderView: UISlider;

	stepValue: number;
}

declare class TKDataFormStepperEditor extends TKDataFormEditor {

	static alloc(): TKDataFormStepperEditor; // inherited from NSObject

	static appearance(): TKDataFormStepperEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormStepperEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormStepperEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormStepperEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormStepperEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormStepperEditor; // inherited from UIAppearance

	static new(): TKDataFormStepperEditor; // inherited from NSObject

	formatter: NSNumberFormatter;

	readonly stepperView: UIStepper;

	readonly valueLabel: UILabel;
}

declare class TKDataFormStringToDateConverter extends NSObject implements TKDataFormConverter {

	static alloc(): TKDataFormStringToDateConverter; // inherited from NSObject

	static new(): TKDataFormStringToDateConverter; // inherited from NSObject

	format: string;

	locale: NSLocale;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	convertFrom(source: any): any;

	convertTo(source: any): any;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKDataFormStringToTimeConverter extends NSObject implements TKDataFormConverter {

	static alloc(): TKDataFormStringToTimeConverter; // inherited from NSObject

	static new(): TKDataFormStringToTimeConverter; // inherited from NSObject

	format: string;

	locale: NSLocale;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	convertFrom(source: any): any;

	convertTo(source: any): any;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKDataFormSwitchEditor extends TKDataFormEditor {

	static alloc(): TKDataFormSwitchEditor; // inherited from NSObject

	static appearance(): TKDataFormSwitchEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormSwitchEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormSwitchEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormSwitchEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormSwitchEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormSwitchEditor; // inherited from UIAppearance

	static new(): TKDataFormSwitchEditor; // inherited from NSObject

	readonly switchView: UISwitch;
}

declare class TKDataFormTextFieldEditor extends TKDataFormEditor implements UITextFieldDelegate {

	static alloc(): TKDataFormTextFieldEditor; // inherited from NSObject

	static appearance(): TKDataFormTextFieldEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormTextFieldEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormTextFieldEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormTextFieldEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormTextFieldEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormTextFieldEditor; // inherited from UIAppearance

	static new(): TKDataFormTextFieldEditor; // inherited from NSObject

	readonly textField: TKTextField;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	textFieldDidBeginEditing(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;
}

declare class TKDataFormTimePickerEditor extends TKDataFormDatePickerEditor {

	static alloc(): TKDataFormTimePickerEditor; // inherited from NSObject

	static appearance(): TKDataFormTimePickerEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormTimePickerEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormTimePickerEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormTimePickerEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormTimePickerEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormTimePickerEditor; // inherited from UIAppearance

	static new(): TKDataFormTimePickerEditor; // inherited from NSObject
}

declare const enum TKDataFormValidationMode {

	Immediate = 0,

	OnLostFocus = 1,

	Manual = 2
}

interface TKDataFormValidator extends NSObjectProtocol {

	errorMessage: string;

	positiveMessage: string;

	validateProperty(property: TKEntityProperty): boolean;
}
declare var TKDataFormValidator: {

	prototype: TKDataFormValidator;
};

declare class TKDataFormViewController extends UIViewController implements TKDataFormDataSource, TKDataFormDelegate {

	static alloc(): TKDataFormViewController; // inherited from NSObject

	static new(): TKDataFormViewController; // inherited from NSObject

	readonly dataForm: TKDataForm;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dataFormCreateEditorForProperty(dataForm: TKDataForm, property: TKEntityProperty): TKDataFormEditor;

	dataFormDidCollapseGroupView(dataForm: TKDataForm, groupView: TKEntityPropertyGroupView): void;

	dataFormDidCommitProperty(dataForm: TKDataForm, property: TKEntityProperty): void;

	dataFormDidDeselectEditorForProperty(dataForm: TKDataForm, editor: TKDataFormEditor, property: TKEntityProperty): void;

	dataFormDidEditProperty(dataForm: TKDataForm, property: TKEntityProperty): void;

	dataFormDidExpandGroupView(dataForm: TKDataForm, groupView: TKEntityPropertyGroupView): void;

	dataFormDidFinishEditorIntitialization(dataForm: TKDataForm): void;

	dataFormDidSelectEditorForProperty(dataForm: TKDataForm, editor: TKDataFormEditor, property: TKEntityProperty): void;

	dataFormDidValidatePropertyEditor(dataForm: TKDataForm, property: TKEntityProperty, editor: TKDataFormEditor): void;

	dataFormEditorClassForProperty(dataForm: TKDataForm, property: TKEntityProperty): typeof NSObject;

	dataFormGroupAtIndex(dataForm: TKDataForm, groupIndex: number): TKEntityPropertyGroup;

	dataFormHeightForEditorInGroupAtIndex(dataForm: TKDataForm, groupIndex: number, editorIndex: number): number;

	dataFormHeightForHeaderInGroup(dataForm: TKDataForm, groupIndex: number): number;

	dataFormInitViewControllerForEditor(dataForm: TKDataForm, viewController: UIViewController, editor: TKDataFormViewControllerEditor): void;

	dataFormNumberOfPropertiesInGroup(dataForm: TKDataForm, groupIndex: number): number;

	dataFormPropertyInGroupAtIndex(dataForm: TKDataForm, groupIndex: number, propertyIndex: number): TKEntityProperty;

	dataFormSetValueForProperty(dataForm: TKDataForm, value: any, property: TKEntityProperty): boolean;

	dataFormSetupEditorForProperty(dataForm: TKDataForm, editor: TKDataFormEditor, property: TKEntityProperty): void;

	dataFormTitleForHeaderInGroup(dataForm: TKDataForm, groupIndex: number): string;

	dataFormUpdateEditorForProperty(dataForm: TKDataForm, editor: TKDataFormEditor, property: TKEntityProperty): void;

	dataFormUpdateGroupViewForGroupAtIndex(dataForm: TKDataForm, groupView: TKEntityPropertyGroupView, groupIndex: number): void;

	dataFormValidatePropertyEditor(dataForm: TKDataForm, property: TKEntityProperty, editor: TKDataFormEditor): boolean;

	dataFormViewForHeaderInGroup(dataForm: TKDataForm, groupIndex: number): TKEntityPropertyGroupTitleView;

	dataFormWillCommitProperty(dataForm: TKDataForm, property: TKEntityProperty): boolean;

	indexOfGroupInDataForm(group: TKEntityPropertyGroup): number;

	inputAccessoryViewForDataForm(dataForm: TKDataForm): TKDataFormAccessoryView;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfGroupsInDataForm(dataForm: TKDataForm): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKDataFormViewControllerEditor extends TKDataFormEditor {

	static alloc(): TKDataFormViewControllerEditor; // inherited from NSObject

	static appearance(): TKDataFormViewControllerEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormViewControllerEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormViewControllerEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormViewControllerEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormViewControllerEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormViewControllerEditor; // inherited from UIAppearance

	static new(): TKDataFormViewControllerEditor; // inherited from NSObject

	createViewController(): UIViewController;

	presentViewController(): void;
}

declare class TKDataSource extends NSObject implements NSURLConnectionDataDelegate, NSURLConnectionDelegate, TKAutoCompleteDataSource, TKCalendarDataSource, TKCalendarDelegate, TKChartDataSource, TKChartDelegate, TKListViewDataSource, TKListViewDelegate, UICollectionViewDataSource, UICollectionViewDelegate, UITableViewDataSource, UITableViewDelegate {

	static alloc(): TKDataSource; // inherited from NSObject

	static new(): TKDataSource; // inherited from NSObject

	allowItemsReorder: boolean;

	currentItem: any;

	displayKey: string;

	readonly filterDescriptors: NSArray<TKDataSourceFilterDescriptor>;

	formatter: NSFormatter;

	readonly groupDescriptors: NSArray<TKDataSourceGroupDescriptor>;

	groupItemSourceKey: string;

	itemSource: any;

	readonly items: NSArray<any>;

	mapClass: typeof NSObject;

	mapCollectionsRecursively: boolean;

	propertyMap: NSDictionary<any, any>;

	readonly settings: TKDataSourceSettings;

	readonly sortDescriptors: NSArray<TKDataSourceSortDescriptor>;

	valueKey: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { array: NSArray<any>; });

	constructor(o: { array: NSArray<any>; displayKey: string; });

	constructor(o: { array: NSArray<any>; displayKey: string; valueKey: string; });

	constructor(o: { dataFromJSONResource: string; ofType: string; rootItemKeyPath: string; });

	constructor(o: { dataFromURL: string; dataFormat: TKDataSourceDataFormat; rootItemKeyPath: string; completion: (p1: NSError) => void; });

	constructor(o: { itemSource: any; });

	constructor(o: { JSONString: string; });

	addFilterDescriptor(filterDescriptor: TKDataSourceFilterDescriptor): void;

	addGroupDescriptor(groupDescriptor: TKDataSourceGroupDescriptor): void;

	addSortDescriptor(sortDescriptor: TKDataSourceSortDescriptor): void;

	autoCompleteCompletionForPrefix(autocomplete: TKAutoCompleteTextView, prefix: string): NSArray<TKAutoCompleteToken>;

	autoCompleteCompletionsForString(autocomplete: TKAutoCompleteTextView, input: string): void;

	calendarDidChangedViewModeFromTo(calendar: TKCalendar, previousViewMode: TKCalendarViewMode, viewMode: TKCalendarViewMode): void;

	calendarDidDeselectedDate(calendar: TKCalendar, date: Date): void;

	calendarDidNavigateToDate(calendar: TKCalendar, date: Date): void;

	calendarDidSelectDate(calendar: TKCalendar, date: Date): void;

	calendarDidTapCell(calendar: TKCalendar, cell: TKCalendarDayCell): void;

	calendarEventsForDate(calendar: TKCalendar, date: Date): NSArray<any>;

	calendarEventsFromDateToDateWithCallback(calendar: TKCalendar, startDate: Date, endDate: Date, eventsCallback: (p1: NSArray<any>) => void): void;

	calendarShapeForEvent(calendar: TKCalendar, event: TKCalendarEventProtocol): TKShape;

	calendarShouldSelectDate(calendar: TKCalendar, date: Date): boolean;

	calendarTextForEvent(calendar: TKCalendar, event: TKCalendarEventProtocol): string;

	calendarUpdateVisualsForCell(calendar: TKCalendar, cell: TKCalendarCell): void;

	calendarViewForCellOfKind(calendar: TKCalendar, cellType: TKCalendarCellType): TKCalendarCell;

	calendarWillNavigateToDate(calendar: TKCalendar, date: Date): void;

	chartAnimationForSeriesWithStateInRect(chart: TKChart, series: TKChartSeries, state: TKChartSeriesRenderState, rect: CGRect): CAAnimation;

	chartAttributedTextForAxisValueAtIndex(chart: TKChart, axis: TKChartAxis, value: any, index: number): NSAttributedString;

	chartDataPointAtIndexForSeriesAtIndex(chart: TKChart, dataIndex: number, seriesIndex: number): TKChartData;

	chartDataPointsForSeriesAtIndex(chart: TKChart, seriesIndex: number): NSArray<any>;

	chartDidDeselectPointInSeriesAtIndex(chart: TKChart, point: TKChartData, series: TKChartSeries, index: number): void;

	chartDidDeselectSeries(chart: TKChart, series: TKChartSeries): void;

	chartDidPan(chart: TKChart): void;

	chartDidSelectPointInSeriesAtIndex(chart: TKChart, point: TKChartData, series: TKChartSeries, index: number): void;

	chartDidSelectSeries(chart: TKChart, series: TKChartSeries): void;

	chartDidTapOnLegendItem(chart: TKChart, legendItem: TKChartLegendItem): void;

	chartDidZoom(chart: TKChart): void;

	chartLabelForDataPointPropertyInSeriesAtIndex(chart: TKChart, dataPoint: TKChartData, propertyName: string, series: TKChartSeries, dataIndex: number): TKChartPointLabel;

	chartLegendItemForSeriesAtIndex(chart: TKChart, series: TKChartSeries, index: number): TKChartLegendItem;

	chartNumberOfDataPointsForSeriesAtIndex(chart: TKChart, seriesIndex: number): number;

	chartPaletteItemForPointInSeries(chart: TKChart, index: number, series: TKChartSeries): TKChartPaletteItem;

	chartPaletteItemForSeriesAtIndex(chart: TKChart, series: TKChartSeries, index: number): TKChartPaletteItem;

	chartPointLabelRenderForSeriesWithRender(chart: TKChart, series: TKChartSeries, render: TKChartSeriesRender): TKChartPointLabelRender;

	chartShapeForSeriesAtIndex(chart: TKChart, series: TKChartSeries, index: number): TKShape;

	chartTextForAxisValueAtIndex(chart: TKChart, axis: TKChartAxis, value: any, index: number): string;

	chartTextForLabelAtPointPropertyInSeriesAtIndex(chart: TKChart, dataPoint: TKChartData, propertyName: string, series: TKChartSeries, dataIndex: number): string;

	chartTrackballDidHideSelection(chart: TKChart, selection: NSArray<any>): void;

	chartTrackballDidTrackSelection(chart: TKChart, selection: NSArray<any>): void;

	chartUpdateLegendItemForSeriesAtIndex(chart: TKChart, item: TKChartLegendItem, series: TKChartSeries, index: number): void;

	chartWillPan(chart: TKChart): void;

	chartWillZoom(chart: TKChart): void;

	class(): typeof NSObject;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	connectionCanAuthenticateAgainstProtectionSpace(connection: NSURLConnection, protectionSpace: NSURLProtectionSpace): boolean;

	connectionDidCancelAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;

	connectionDidFailWithError(connection: NSURLConnection, error: NSError): void;

	connectionDidFinishLoading(connection: NSURLConnection): void;

	connectionDidReceiveAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;

	connectionDidReceiveData(connection: NSURLConnection, data: NSData): void;

	connectionDidReceiveResponse(connection: NSURLConnection, response: NSURLResponse): void;

	connectionDidSendBodyDataTotalBytesWrittenTotalBytesExpectedToWrite(connection: NSURLConnection, bytesWritten: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;

	connectionNeedNewBodyStream(connection: NSURLConnection, request: NSURLRequest): NSInputStream;

	connectionShouldUseCredentialStorage(connection: NSURLConnection): boolean;

	connectionWillCacheResponse(connection: NSURLConnection, cachedResponse: NSCachedURLResponse): NSCachedURLResponse;

	connectionWillSendRequestForAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;

	connectionWillSendRequestRedirectResponse(connection: NSURLConnection, request: NSURLRequest, response: NSURLResponse): NSURLRequest;

	enumerate(enumeratorBlock: (p1: any) => void): void;

	filter(filterBlock: (p1: any) => boolean): void;

	filterWithQuery(filterQuery: string): void;

	formatText(formatTextBlock: (p1: any, p2: TKDataSourceGroup) => string): void;

	group(keyForItem: (p1: any) => any): void;

	groupComparator(keyForItem: (p1: any) => any, comparatorBlock: (p1: any, p2: any) => NSComparisonResult): void;

	groupWithKey(propertyName: string): void;

	groupWithKeyComparator(propertyName: string, comparatorBlock: (p1: any, p2: any) => NSComparisonResult): void;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	initWithArray(items: NSArray<any>): this;

	initWithArrayDisplayKey(items: NSArray<any>, displayKey: string): this;

	initWithArrayDisplayKeyValueKey(items: NSArray<any>, displayKey: string, valueKey: string): this;

	initWithDataFromJSONResourceOfTypeRootItemKeyPath(name: string, type: string, rootItemKeyPath: string): this;

	initWithDataFromURLDataFormatRootItemKeyPathCompletion(url: string, dataFormat: TKDataSourceDataFormat, rootItemKeyPath: string, completion: (p1: NSError) => void): this;

	initWithItemSource(itemSource: any): this;

	initWithJSONString(str: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	listViewCellForItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): TKListViewCell;

	listViewDidDeselectItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): void;

	listViewDidFinishSwipeCellAtIndexPathWithOffset(listView: TKListView, cell: TKListViewCell, indexPath: NSIndexPath, offset: CGPoint): void;

	listViewDidHighlightItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): void;

	listViewDidLongPressCellAtIndexPath(listView: TKListView, cell: TKListViewCell, indexPath: NSIndexPath): void;

	listViewDidPullWithOffset(listView: TKListView, offset: number): void;

	listViewDidReorderItemFromIndexPathToIndexPath(listView: TKListView, originalIndexPath: NSIndexPath, targetIndexPath: NSIndexPath): void;

	listViewDidSelectItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): void;

	listViewDidSwipeCellAtIndexPathWithOffset(listView: TKListView, cell: TKListViewCell, indexPath: NSIndexPath, offset: CGPoint): void;

	listViewDidUnhighlightItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): void;

	listViewNumberOfItemsInSection(listView: TKListView, section: number): number;

	listViewShouldDeselectItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): boolean;

	listViewShouldHighlightItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): boolean;

	listViewShouldLoadMoreDataAtIndexPath(listView: TKListView, indexPath: NSIndexPath): boolean;

	listViewShouldRefreshOnPull(listView: TKListView): boolean;

	listViewShouldSelectItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): boolean;

	listViewShouldSwipeCellAtIndexPath(listView: TKListView, cell: TKListViewCell, indexPath: NSIndexPath): boolean;

	listViewViewForSupplementaryElementOfKindAtIndexPath(listView: TKListView, kind: string, indexPath: NSIndexPath): TKListViewReusableCell;

	listViewWillReorderItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): void;

	loadDataFromJSONResourceOfTypeRootItemKeyPath(name: string, type: string, rootItemKeyPath: string): void;

	loadDataFromJSONStringRootItemKeyPath(string: string, rootItemKeyPath: string): void;

	loadDataFromURLDataFormatRootItemKeyPathCompletion(url: string, dataFormat: TKDataSourceDataFormat, rootItemKeyPath: string, completion: (p1: NSError) => void): void;

	map(mapBlock: (p1: any) => any): void;

	moveItemAtIndexToIndex(fromIndex: number, toIndex: number): void;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	numberOfSectionsInListView(listView: TKListView): number;

	numberOfSectionsInTableView(tableView: UITableView): number;

	numberOfSeriesForChart(chart: TKChart): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reduceWith(initialValue: any, reduceBlock: (p1: any, p2: any) => any): any;

	reloadData(): void;

	removeAllFilterDescriptors(): void;

	removeAllGroupDescriptors(): void;

	removeAllSortDescriptors(): void;

	removeFilterDescriptor(filterDescriptor: TKDataSourceFilterDescriptor): void;

	removeGroupDescriptor(groupDescriptor: TKDataSourceGroupDescriptor): void;

	removeSortDescriptor(sortDescriptor: TKDataSourceSortDescriptor): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	seriesForChartAtIndex(chart: TKChart, index: number): TKChartSeries;

	sort(comparatorBlock: (p1: any, p2: any) => NSComparisonResult): void;

	sortWithKeyAscending(propertyName: string, ascending: boolean): void;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	textFromItemInGroup(item: any, group: TKDataSourceGroup): string;

	valueForItemInGroup(item: any, group: TKDataSourceGroup): any;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class TKDataSourceAutoCompleteSettings extends NSObject {

	static alloc(): TKDataSourceAutoCompleteSettings; // inherited from NSObject

	static new(): TKDataSourceAutoCompleteSettings; // inherited from NSObject

	completionMode: TKAutoCompleteCompletionMode;

	highlightColor: UIColor;

	highlightMatch: boolean;

	valueKey: string;

	createToken(createToken: (p1: number, p2: any) => TKAutoCompleteToken): void;
}

declare class TKDataSourceCalendarSettings extends NSObject {

	static alloc(): TKDataSourceCalendarSettings; // inherited from NSObject

	static new(): TKDataSourceCalendarSettings; // inherited from NSObject

	defaultEventColor: UIColor;

	endDateKey: string;

	eventColorKey: string;

	startDateKey: string;
}

declare class TKDataSourceChartSettings extends NSObject {

	static alloc(): TKDataSourceChartSettings; // inherited from NSObject

	static new(): TKDataSourceChartSettings; // inherited from NSObject

	createPoint(createPoint: (p1: number, p2: number, p3: any) => TKChartData): void;

	createSeries(createSeries: (p1: TKDataSourceGroup) => TKChartSeries): void;
}

declare class TKDataSourceCollectionViewSettings extends NSObject {

	static alloc(): TKDataSourceCollectionViewSettings; // inherited from NSObject

	static new(): TKDataSourceCollectionViewSettings; // inherited from NSObject

	createCell(cellIdForItem: (p1: UICollectionView, p2: NSIndexPath, p3: any) => UICollectionViewCell): void;

	initCell(initCellWithItem: (p1: UICollectionView, p2: NSIndexPath, p3: UICollectionViewCell, p4: any) => void): void;
}

declare const enum TKDataSourceDataFormat {

	JSON = 0
}

declare class TKDataSourceFilterDescriptor extends NSObject {

	static alloc(): TKDataSourceFilterDescriptor; // inherited from NSObject

	static new(): TKDataSourceFilterDescriptor; // inherited from NSObject

	readonly filterBlock: (p1: any) => boolean;

	readonly query: string;

	constructor(o: { block: (p1: any) => boolean; });

	constructor(o: { query: string; });

	evaluate(item: any): boolean;

	initWithBlock(filterBlock: (p1: any) => boolean): this;

	initWithQuery(query: string): this;
}

declare class TKDataSourceGroup extends NSObject {

	static alloc(): TKDataSourceGroup; // inherited from NSObject

	static new(): TKDataSourceGroup; // inherited from NSObject

	displayKey: string;

	items: NSArray<any>;

	key: any;

	valueKey: string;

	constructor(o: { items: NSArray<any>; });

	constructor(o: { items: NSArray<any>; valueKey: string; });

	constructor(o: { items: NSArray<any>; valueKey: string; displayKey: string; });

	initWithItems(items: NSArray<any>): this;

	initWithItemsValueKey(items: NSArray<any>, valueKey: string): this;

	initWithItemsValueKeyDisplayKey(items: NSArray<any>, valueKey: string, displayKey: string): this;
}

declare class TKDataSourceGroupDescriptor extends NSObject {

	static alloc(): TKDataSourceGroupDescriptor; // inherited from NSObject

	static new(): TKDataSourceGroupDescriptor; // inherited from NSObject

	readonly comparatorBlock: (p1: any, p2: any) => NSComparisonResult;

	readonly keyForItemBlock: (p1: any) => any;

	propertyName: string;

	constructor(o: { block: (p1: any) => any; });

	constructor(o: { block: (p1: any) => any; comparator: (p1: any, p2: any) => NSComparisonResult; });

	constructor(o: { property: string; });

	constructor(o: { property: string; comparator: (p1: any, p2: any) => NSComparisonResult; });

	initWithBlock(keyForItemBlock: (p1: any) => any): this;

	initWithBlockComparator(keyForItemBlock: (p1: any) => any, comparatorBlock: (p1: any, p2: any) => NSComparisonResult): this;

	initWithProperty(propertyName: string): this;

	initWithPropertyComparator(propertyName: string, comparatorBlock: (p1: any, p2: any) => NSComparisonResult): this;

	keyForItem(item: any): any;
}

declare class TKDataSourceListViewSettings extends NSObject {

	static alloc(): TKDataSourceListViewSettings; // inherited from NSObject

	static new(): TKDataSourceListViewSettings; // inherited from NSObject

	defaultCellClass: typeof NSObject;

	defaultCellID: string;

	createCell(createCellBlock: (p1: TKListView, p2: NSIndexPath, p3: any) => TKListViewCell): void;

	createSupplementaryView(createViewBlock: (p1: TKListView, p2: NSIndexPath, p3: string, p4: TKDataSourceGroup) => TKListViewReusableCell): void;

	initCell(initCellBlock: (p1: TKListView, p2: NSIndexPath, p3: TKListViewCell, p4: any) => void): void;

	initFooter(initFooterBlock: (p1: TKListView, p2: NSIndexPath, p3: TKListViewFooterCell, p4: TKDataSourceGroup) => void): void;

	initHeader(initHeaderBlock: (p1: TKListView, p2: NSIndexPath, p3: TKListViewHeaderCell, p4: TKDataSourceGroup) => void): void;
}

declare class TKDataSourceSettings extends NSObject {

	static alloc(): TKDataSourceSettings; // inherited from NSObject

	static new(): TKDataSourceSettings; // inherited from NSObject

	readonly autocomplete: TKDataSourceAutoCompleteSettings;

	readonly calendar: TKDataSourceCalendarSettings;

	readonly chart: TKDataSourceChartSettings;

	readonly collectionView: TKDataSourceCollectionViewSettings;

	readonly listView: TKDataSourceListViewSettings;

	readonly tableView: TKDataSourceTableViewSettings;
}

declare class TKDataSourceSortDescriptor extends NSObject {

	static alloc(): TKDataSourceSortDescriptor; // inherited from NSObject

	static new(): TKDataSourceSortDescriptor; // inherited from NSObject

	ascending: boolean;

	readonly comparator: (p1: any, p2: any) => NSComparisonResult;

	readonly descriptor: NSSortDescriptor;

	propertyName: string;

	constructor(o: { comparator: (p1: any, p2: any) => NSComparisonResult; });

	constructor(o: { property: string; ascending: boolean; });

	initWithComparator(comparator: (p1: any, p2: any) => NSComparisonResult): this;

	initWithPropertyAscending(propertyName: string, ascending: boolean): this;
}

declare class TKDataSourceTableViewSettings extends NSObject {

	static alloc(): TKDataSourceTableViewSettings; // inherited from NSObject

	static new(): TKDataSourceTableViewSettings; // inherited from NSObject

	createCell(createCellForItem: (p1: UITableView, p2: NSIndexPath, p3: any) => UITableViewCell): void;

	initCell(initCellWithItem: (p1: UITableView, p2: NSIndexPath, p3: UITableViewCell, p4: any) => void): void;
}

declare class TKDateRange extends NSObject {

	static alloc(): TKDateRange; // inherited from NSObject

	static new(): TKDateRange; // inherited from NSObject

	endDate: Date;

	readonly isNormalized: boolean;

	startDate: Date;

	constructor(o: { start: Date; end: Date; });

	containsDate(date: Date): boolean;

	initWithStartEnd(startDate: Date, endDate: Date): this;

	normalize(): void;
}

interface TKDrawing extends NSObjectProtocol {

	insets?: UIEdgeInsets;

	drawInContextWithPath(context: any, path: any): void;

	drawInContextWithRect(context: any, rect: CGRect): void;
}
declare var TKDrawing: {

	prototype: TKDrawing;
};

declare class TKEntity extends NSObject {

	static alloc(): TKEntity; // inherited from NSObject

	static entityWithObject(sourceObject: NSObject): TKEntity;

	static new(): TKEntity; // inherited from NSObject

	readonly defaultGroup: TKEntityPropertyGroup;

	readonly groups: NSArray<any>;

	readonly properties: NSArray<any>;

	sourceObject: NSObject;

	constructor(o: { dataFromJSONResource: string; ofType: string; rootItemKeyPath: string; });

	constructor(o: { JSONFromURL: string; rootItemKeyPath: string; completion: (p1: NSError) => void; });

	constructor(o: { JSONString: string; rootItemKeyPath: string; });

	constructor(o: { object: NSObject; });

	constructor(o: { object: NSObject; propertyNames: NSArray<any>; });

	addGroup(group: TKEntityPropertyGroup): void;

	addGroupWithNamePropertyNames(name: string, propertyNames: NSArray<any>): TKEntityPropertyGroup;

	commit(): boolean;

	groupAtIndex(index: number): TKEntityPropertyGroup;

	groupWithName(groupName: string): TKEntityPropertyGroup;

	initWithDataFromJSONResourceOfTypeRootItemKeyPath(name: string, type: string, rootItemKeyPath: string): this;

	initWithJSONFromURLRootItemKeyPathCompletion(url: string, rootItemKeyPath: string, completion: (p1: NSError) => void): this;

	initWithJSONStringRootItemKeyPath(str: string, rootItemKeyPath: string): this;

	initWithObject(sourceObject: NSObject): this;

	initWithObjectPropertyNames(sourceObject: NSObject, propertyNames: NSArray<any>): this;

	insertGroupAtIndex(group: TKEntityPropertyGroup, index: number): void;

	objectForKeyedSubscript(propertyName: string): TKEntityProperty;

	propertyWithName(propertyName: string): TKEntityProperty;

	removeAllGroups(): void;

	removeGroup(group: TKEntityPropertyGroup): void;

	removeGroupAtIndex(index: number): void;

	setSourceObjectWithProperties(sourceObject: NSObject, properties: NSArray<any>): void;

	setSourceObjectWithPropertyNames(sourceObject: NSObject, propertyNames: NSArray<any>): void;

	validate(): NSArray<any>;

	writeJSONToStream(outputStream: NSOutputStream): NSError;

	writeJSONToString(): string;
}

declare class TKEntityProperty extends NSObject {

	static alloc(): TKEntityProperty; // inherited from NSObject

	static new(): TKEntityProperty; // inherited from NSObject

	autoCompleteDisplayMode: TKAutoCompleteDisplayMode;

	converter: TKDataFormConverter;

	displayName: string;

	editorClass: typeof NSObject;

	errorImage: UIImage;

	errorMessage: string;

	formatter: NSFormatter;

	groupName: string;

	hidden: boolean;

	hintText: string;

	image: UIImage;

	index: number;

	isNullable: boolean;

	readonly isValid: boolean;

	layoutInfo: TKLayoutInfo;

	readonly name: string;

	readonly originalValue: any;

	readonly owner: TKEntity;

	pickersUseIndexValue: boolean;

	positiveImage: UIImage;

	positiveMessage: string;

	readonly propertyClass: typeof NSObject;

	range: TKRange;

	readOnly: boolean;

	required: boolean;

	step: number;

	type: TKEntityPropertyType;

	validators: NSArray<any>;

	valueCandidate: any;

	valuesProvider: NSArray<any>;

	readonly wasValidated: boolean;

	constructor(o: { entity: TKEntity; forPropertyName: string; });

	commit(): boolean;

	initWithEntityForPropertyName(owner: TKEntity, propertyName: string): this;

	validate(): boolean;
}

declare class TKEntityPropertyGroup extends NSObject {

	static alloc(): TKEntityPropertyGroup; // inherited from NSObject

	static new(): TKEntityPropertyGroup; // inherited from NSObject

	hidden: boolean;

	name: string;

	owner: TKEntity;

	readonly properties: NSArray<any>;
	[index: number]: TKEntityProperty;

	constructor(o: { name: string; properties: NSArray<any>; });

	constructor(o: { name: string; properties: NSArray<any>; orderByPropertyIndex: boolean; });

	addProperty(property: TKEntityProperty): void;

	initWithNameProperties(name: string, properties: NSArray<any>): this;

	initWithNamePropertiesOrderByPropertyIndex(name: string, properties: NSArray<any>, orderByPropertyIndex: boolean): this;

	insertPropertyAtIndex(property: TKEntityProperty, index: number): void;

	objectAtIndexedSubscript(index: number): TKEntityProperty;

	objectForKeyedSubscript(propertyName: string): TKEntityProperty;

	propertyAtIndex(index: number): TKEntityProperty;

	propertyWithName(name: string): TKEntityProperty;

	removeAllProperties(): void;

	removeProperty(property: TKEntityProperty): void;

	removePropertyAtIndex(index: number): void;
}

declare class TKEntityPropertyGroupEditorsView extends UIView {

	static alloc(): TKEntityPropertyGroupEditorsView; // inherited from NSObject

	static appearance(): TKEntityPropertyGroupEditorsView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKEntityPropertyGroupEditorsView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKEntityPropertyGroupEditorsView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKEntityPropertyGroupEditorsView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKEntityPropertyGroupEditorsView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKEntityPropertyGroupEditorsView; // inherited from UIAppearance

	static new(): TKEntityPropertyGroupEditorsView; // inherited from NSObject

	readonly items: NSArray<any>;

	layout: TKLayout;

	addItem(item: UIView): void;

	addItemAtIndex(item: UIView, index: number): void;

	removeAllItems(): void;

	removeItem(item: UIView): void;

	updateLayout(): void;
}

declare const enum TKEntityPropertyGroupTitleIndicatorPosition {

	Left = 0,

	Right = 1
}

declare class TKEntityPropertyGroupTitleView extends UIView {

	static alloc(): TKEntityPropertyGroupTitleView; // inherited from NSObject

	static appearance(): TKEntityPropertyGroupTitleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKEntityPropertyGroupTitleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKEntityPropertyGroupTitleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKEntityPropertyGroupTitleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKEntityPropertyGroupTitleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKEntityPropertyGroupTitleView; // inherited from UIAppearance

	static new(): TKEntityPropertyGroupTitleView; // inherited from NSObject

	allowIndicatorAnimation: boolean;

	indicatorPosition: TKEntityPropertyGroupTitleIndicatorPosition;

	indicatorView: UIView;

	itemSpacing: number;

	readonly style: TKDataFormGroupTitleStyle;

	readonly titleLabel: TKLabel;
}

declare class TKEntityPropertyGroupTitleViewIndicator extends UIView {

	static alloc(): TKEntityPropertyGroupTitleViewIndicator; // inherited from NSObject

	static appearance(): TKEntityPropertyGroupTitleViewIndicator; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKEntityPropertyGroupTitleViewIndicator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKEntityPropertyGroupTitleViewIndicator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKEntityPropertyGroupTitleViewIndicator; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKEntityPropertyGroupTitleViewIndicator; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKEntityPropertyGroupTitleViewIndicator; // inherited from UIAppearance

	static new(): TKEntityPropertyGroupTitleViewIndicator; // inherited from NSObject

	fillColor: TKSolidFill;

	size: CGSize;

	strokeColor: TKStroke;
}

declare class TKEntityPropertyGroupView extends UIView {

	static alloc(): TKEntityPropertyGroupView; // inherited from NSObject

	static appearance(): TKEntityPropertyGroupView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKEntityPropertyGroupView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKEntityPropertyGroupView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKEntityPropertyGroupView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKEntityPropertyGroupView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKEntityPropertyGroupView; // inherited from UIAppearance

	static new(): TKEntityPropertyGroupView; // inherited from NSObject

	collapsible: boolean;

	readonly editorsContainer: TKEntityPropertyGroupEditorsView;

	readonly group: TKEntityPropertyGroup;

	readonly isCollapsed: boolean;

	titleView: TKEntityPropertyGroupTitleView;
}

declare const enum TKEntityPropertyType {

	Unknown = 0,

	Numeric = 1,

	Integer = 2,

	Double = 3,

	Bool = 4,

	String = 5,

	Date = 6
}

declare class TKFill extends NSObject implements NSCopying, TKDrawing {

	static alloc(): TKFill; // inherited from NSObject

	static new(): TKFill; // inherited from NSObject

	alpha: number;

	cornerRadius: number;

	corners: UIRectCorner;

	shadowBlur: number;

	shadowColor: UIColor;

	shadowOffset: CGSize;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	insets: UIEdgeInsets; // inherited from TKDrawing

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	drawFillInContextWithPath(context: any, path: any): void;

	drawFillInContextWithRect(context: any, rect: CGRect): void;

	drawInContextWithPath(context: any, path: any): void;

	drawInContextWithRect(context: any, rect: CGRect): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKGauge extends TKView {

	static alloc(): TKGauge; // inherited from NSObject

	static appearance(): TKGauge; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKGauge; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKGauge; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKGauge; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKGauge; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKGauge; // inherited from UIAppearance

	static new(): TKGauge; // inherited from NSObject

	delegate: TKGaugeDelegate;

	insets: UIEdgeInsets;

	readonly labelSubtitle: UILabel;

	labelSubtitleOffset: CGPoint;

	readonly labelTitle: UILabel;

	labelTitleOffset: CGPoint;

	rectWithInsets: CGRect;

	readonly scales: NSArray<TKGaugeScale>;

	addScale(scale: TKGaugeScale): void;

	insertScaleAtIndex(scale: TKGaugeScale, index: number): void;

	removeAllScales(): void;

	removeScale(scale: TKGaugeScale): void;

	removeScaleAtIndex(index: number): void;

	scaleAtIndex(index: number): TKGaugeScale;
}

interface TKGaugeDelegate extends NSObjectProtocol {

	gaugeTextForLabel?(gauge: TKGauge, label: any): string;

	gaugeValueChangedForScale?(gauge: TKGauge, value: number, scale: TKGaugeScale): void;
}
declare var TKGaugeDelegate: {

	prototype: TKGaugeDelegate;
};

declare class TKGaugeIndicator extends CALayer {

	static alloc(): TKGaugeIndicator; // inherited from NSObject

	static layer(): TKGaugeIndicator; // inherited from CALayer

	static new(): TKGaugeIndicator; // inherited from NSObject

	allowTouch: boolean;

	fill: TKFill;

	owner: TKGaugeScale;

	stroke: TKStroke;

	value: number;
}

declare class TKGaugeLabels extends NSObject {

	static alloc(): TKGaugeLabels; // inherited from NSObject

	static new(): TKGaugeLabels; // inherited from NSObject

	color: UIColor;

	count: number;

	font: UIFont;

	formatter: NSFormatter;

	hidden: boolean;

	labelFormat: string;

	offset: number;

	position: TKGaugeLabelsPosition;
}

declare const enum TKGaugeLabelsPosition {

	Inner = 0,

	Outer = 1
}

declare class TKGaugeLinearScale extends TKGaugeScale {

	static alloc(): TKGaugeLinearScale; // inherited from NSObject

	static layer(): TKGaugeLinearScale; // inherited from CALayer

	static new(): TKGaugeLinearScale; // inherited from NSObject

	endPoint: number;

	offset: number;

	startPoint: number;
}

declare class TKGaugeNeedle extends TKGaugeIndicator {

	static alloc(): TKGaugeNeedle; // inherited from NSObject

	static layer(): TKGaugeNeedle; // inherited from CALayer

	static new(): TKGaugeNeedle; // inherited from NSObject

	circleFill: TKFill;

	circleInnerRadius: number;

	circleRadius: number;

	circleStroke: TKStroke;

	length: number;

	offset: number;

	topWidth: number;

	width: number;

	constructor(o: { value: number; });

	constructor(o: { value: number; length: number; });

	initWithValue(value: number): this;

	initWithValueLength(value: number, length: number): this;

	setValueAnimatedWithDurationMediaTimingFunction(value: number, duration: number, functionName: string): void;
}

declare class TKGaugeRadialScale extends TKGaugeScale {

	static alloc(): TKGaugeRadialScale; // inherited from NSObject

	static layer(): TKGaugeRadialScale; // inherited from CALayer

	static new(): TKGaugeRadialScale; // inherited from NSObject

	endAngle: number;

	radius: number;

	startAngle: number;
}

declare class TKGaugeScale extends CALayer {

	static alloc(): TKGaugeScale; // inherited from NSObject

	static layer(): TKGaugeScale; // inherited from CALayer

	static new(): TKGaugeScale; // inherited from NSObject

	fill: TKFill;

	readonly indicators: NSArray<TKGaugeIndicator>;

	readonly labels: TKGaugeLabels;

	owner: TKGauge;

	range: TKRange;

	readonly segments: NSArray<TKGaugeSegment>;

	stroke: TKStroke;

	readonly ticks: TKGaugeTicks;

	constructor(o: { minimum: any; maximum: any; });

	constructor(o: { range: TKRange; });

	addIndicator(indicator: TKGaugeIndicator): void;

	addSegment(segment: TKGaugeSegment): void;

	denormalize(value: number): number;

	indicatorAtIndex(index: number): TKGaugeIndicator;

	initWithMinimumMaximum(minimum: any, maximum: any): this;

	initWithRange(range: TKRange): this;

	insertIndicatorAtIndex(indicator: TKGaugeIndicator, index: number): void;

	insertSegmentAtIndex(segment: TKGaugeSegment, index: number): void;

	locationForValue(value: number): number;

	removeAllIndicators(): void;

	removeAllSegments(): void;

	removeIndicator(indicator: TKGaugeIndicator): void;

	removeIndicatorAtIndex(index: number): void;

	removeSegment(segment: TKGaugeSegment): void;

	removeSegmentAtIndex(index: number): void;

	segmentAtIndex(index: number): TKGaugeSegment;

	textForValue(value: number): string;

	valueForPoint(point: CGPoint): number;
}

declare class TKGaugeSegment extends CALayer {

	static alloc(): TKGaugeSegment; // inherited from NSObject

	static layer(): TKGaugeSegment; // inherited from CALayer

	static new(): TKGaugeSegment; // inherited from NSObject

	allowTouch: boolean;

	cap: TKGaugeSegmentCap;

	fill: TKFill;

	location: number;

	owner: TKGaugeScale;

	range: TKRange;

	stroke: TKStroke;

	width: number;

	width2: number;

	constructor(o: { minimum: any; maximum: any; });

	constructor(o: { range: TKRange; });

	initWithMinimumMaximum(minimum: any, maximum: any): this;

	initWithRange(range: TKRange): this;

	setRangeAnimatedWithDurationMediaTimingFunction(value: TKRange, duration: number, functionName: string): void;
}

declare const enum TKGaugeSegmentCap {

	Round = 0,

	Edge = 1
}

declare class TKGaugeTicks extends NSObject {

	static alloc(): TKGaugeTicks; // inherited from NSObject

	static new(): TKGaugeTicks; // inherited from NSObject

	hidden: boolean;

	majorTicksCount: number;

	majorTicksFill: TKFill;

	majorTicksLength: number;

	majorTicksStroke: TKStroke;

	majorTicksWidth: number;

	minorTicksCount: number;

	minorTicksFill: TKFill;

	minorTicksLength: number;

	minorTicksStroke: TKStroke;

	minorTicksWidth: number;

	offset: number;

	position: TKGaugeTicksPosition;
}

declare const enum TKGaugeTicksPosition {

	Inner = 0,

	Outer = 1
}

declare class TKGradientFill extends TKFill {

	static alloc(): TKGradientFill; // inherited from NSObject

	static new(): TKGradientFill; // inherited from NSObject

	colors: NSArray<UIColor>;

	locations: NSArray<number>;

	constructor(o: { colors: NSArray<any>; });

	constructor(o: { colors: NSArray<any>; cornerRadius: number; });

	constructor(o: { colors: NSArray<any>; locations: NSArray<any>; });

	constructor(o: { colors: NSArray<any>; locations: NSArray<any>; cornerRadius: number; });

	initWithColors(colors: NSArray<any>): this;

	initWithColorsCornerRadius(colors: NSArray<any>, cornerRadius: number): this;

	initWithColorsLocations(colors: NSArray<any>, locations: NSArray<any>): this;

	initWithColorsLocationsCornerRadius(colors: NSArray<any>, locations: NSArray<any>, cornerRadius: number): this;
}

declare const enum TKGradientRadiusType {

	Pixels = 0,

	RectMin = 1,

	RectMax = 2
}

declare class TKGridLayout extends NSObject implements TKLayout {

	static alloc(): TKGridLayout; // inherited from NSObject

	static new(): TKGridLayout; // inherited from NSObject

	readonly arrangedViews: NSArray<any>;

	readonly definitions: NSArray<any>;

	horizontalSpacing: number;

	minColumnsWidth: number;

	minRowsHeight: number;

	verticalSpacing: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	frame: CGRect; // inherited from TKLayout

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	orientation: TKLayoutOrientation; // inherited from TKLayout

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { frame: CGRect; });

	addArrangedView(view: UIView): void;

	addDefinition(definition: TKGridLayoutCellDefinition): void;

	addDefinitionForViewAtRowColumnRowSpanColumnSpan(view: UIView, row: number, column: number, rowSpan: number, columnSpan: number): TKGridLayoutCellDefinition;

	arrangeViewWithLayoutInfo(view: UIView, layoutInfo: TKLayoutInfo): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	definitionForView(view: UIView): TKGridLayoutCellDefinition;

	initWithFrame(frame: CGRect): this;

	insertArrangedViewAtIndex(view: UIView, index: number): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	layoutArrangedViews(): void;

	measurePreferredSizeThatFitsSize(size: CGSize): CGSize;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAllArrangedViews(): void;

	removeAllDefinitions(): void;

	removeArrangedView(view: UIView): void;

	removeDefinition(definition: TKGridLayoutCellDefinition): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setHeightForRow(height: number, row: number): void;

	setWidthForColumn(width: number, col: number): void;
}

declare const enum TKGridLayoutAlignment {

	Top = 1,

	Left = 2,

	Bottom = 4,

	Right = 8,

	Center = 16,

	CenterVertical = 32,

	CenterHorizontal = 64,

	Fill = 128,

	FillVertical = 256,

	FillHorizontal = 512
}

declare class TKGridLayoutCellDefinition extends NSObject {

	static alloc(): TKGridLayoutCellDefinition; // inherited from NSObject

	static new(): TKGridLayoutCellDefinition; // inherited from NSObject

	alignment: TKGridLayoutAlignment;

	column: number;

	columnSpan: number;

	contentOffset: UIOffset;

	row: number;

	rowSpan: number;

	view: UIView;

	constructor(o: { view: UIView; });

	constructor(o: { view: UIView; atRow: number; column: number; });

	constructor(o: { view: UIView; atRow: number; column: number; rowSpan: number; columnSpan: number; });

	initWithView(view: UIView): this;

	initWithViewAtRowColumn(view: UIView, row: number, col: number): this;

	initWithViewAtRowColumnRowSpanColumnSpan(view: UIView, row: number, col: number, rowSpan: number, colSpan: number): this;
}

declare class TKImageFill extends TKFill {

	static alloc(): TKImageFill; // inherited from NSObject

	static imageFillWithImage(image: UIImage): TKImageFill;

	static imageFillWithImageCornerRadius(image: UIImage, cornerRadius: number): TKImageFill;

	static new(): TKImageFill; // inherited from NSObject

	image: UIImage;

	resizingMode: TKImageFillResizingMode;

	constructor(o: { image: UIImage; });

	constructor(o: { image: UIImage; cornerRadius: number; });

	initWithImage(image: UIImage): this;

	initWithImageCornerRadius(image: UIImage, cornerRadius: number): this;
}

declare const enum TKImageFillResizingMode {

	Tile = 0,

	Stretch = 1,

	None = 2
}

declare class TKImageView extends UIImageView {

	static alloc(): TKImageView; // inherited from NSObject

	static appearance(): TKImageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKImageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKImageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKImageView; // inherited from UIAppearance

	static new(): TKImageView; // inherited from NSObject
}

declare class TKLabel extends UILabel {

	static alloc(): TKLabel; // inherited from NSObject

	static appearance(): TKLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKLabel; // inherited from UIAppearance

	static new(): TKLabel; // inherited from NSObject

	textInsets: UIEdgeInsets;
}

declare class TKLayer extends CALayer {

	static alloc(): TKLayer; // inherited from NSObject

	static layer(): TKLayer; // inherited from CALayer

	static new(): TKLayer; // inherited from NSObject

	fill: TKFill;

	shape: TKShape;

	stroke: TKStroke;

	sizeThatFits(size: CGSize): CGSize;

	sizeToFit(): void;
}

interface TKLayout extends NSObjectProtocol {

	arrangedViews: NSArray<any>;

	frame: CGRect;

	orientation: TKLayoutOrientation;

	addArrangedView(view: UIView): void;

	arrangeViewWithLayoutInfo(view: UIView, layoutInfo: TKLayoutInfo): void;

	insertArrangedViewAtIndex(view: UIView, index: number): void;

	layoutArrangedViews(): void;

	measurePreferredSizeThatFitsSize(size: CGSize): CGSize;

	removeAllArrangedViews(): void;

	removeArrangedView(view: UIView): void;
}
declare var TKLayout: {

	prototype: TKLayout;
};

declare class TKLayoutInfo extends NSObject {

	static alloc(): TKLayoutInfo; // inherited from NSObject

	static new(): TKLayoutInfo; // inherited from NSObject

	column: number;

	columnSpan: number;

	row: number;

	rowSpan: number;

	constructor(o: { row: number; column: number; rowSpan: number; columnSpan: number; });

	initWithRowColumnRowSpanColumnSpan(row: number, column: number, rowSpan: number, columnSpan: number): this;
}

declare const enum TKLayoutOrientation {

	Horizontal = 0,

	Vertical = 1
}

declare class TKLinearGauge extends TKGauge {

	static alloc(): TKLinearGauge; // inherited from NSObject

	static appearance(): TKLinearGauge; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKLinearGauge; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKLinearGauge; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKLinearGauge; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKLinearGauge; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKLinearGauge; // inherited from UIAppearance

	static new(): TKLinearGauge; // inherited from NSObject

	labelOrientation: TKLinearGaugeOrientation;

	labelPosition: TKLinearGaugeLabelPosition;

	labelSpacing: number;

	orientation: TKLinearGaugeOrientation;
}

declare const enum TKLinearGaugeLabelPosition {

	TopOrLeft = 0,

	BottomOrRight = 1
}

declare const enum TKLinearGaugeOrientation {

	Horizontal = 0,

	Vertical = 1
}

declare class TKLinearGradientFill extends TKGradientFill {

	static alloc(): TKLinearGradientFill; // inherited from NSObject

	static linearGradientFillWithColors(colors: NSArray<any>): TKLinearGradientFill;

	static linearGradientFillWithColorsLocationsStartPointEndPoint(colors: NSArray<any>, locations: NSArray<any>, startPoint: CGPoint, endPoint: CGPoint): TKLinearGradientFill;

	static linearGradientFillWithColorsStartPointEndPoint(colors: NSArray<any>, startPoint: CGPoint, endPoint: CGPoint): TKLinearGradientFill;

	static new(): TKLinearGradientFill; // inherited from NSObject

	static reverse(fill: TKLinearGradientFill): TKLinearGradientFill;

	endPoint: CGPoint;

	startPoint: CGPoint;

	constructor(o: { colors: NSArray<any>; locations: NSArray<any>; startPoint: CGPoint; endPoint: CGPoint; });

	constructor(o: { colors: NSArray<any>; startPoint: CGPoint; endPoint: CGPoint; });

	initWithColorsLocationsStartPointEndPoint(colors: NSArray<any>, locations: NSArray<any>, startPoint: CGPoint, endPoint: CGPoint): this;

	initWithColorsStartPointEndPoint(colors: NSArray<any>, startPoint: CGPoint, endPoint: CGPoint): this;
}

declare class TKListView extends UIView implements UICollectionViewDataSource, UICollectionViewDelegate {

	static alloc(): TKListView; // inherited from NSObject

	static appearance(): TKListView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKListView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKListView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKListView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKListView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKListView; // inherited from UIAppearance

	static new(): TKListView; // inherited from NSObject

	allowsCellReorder: boolean;

	allowsCellSwipe: boolean;

	allowsMultipleSelection: boolean;

	allowsPullToRefresh: boolean;

	autoRestrictSwipeDirection: boolean;

	autoScrollTreshold: number;

	backgroundView: UIView;

	cellSwipeAnimationDuration: number;

	cellSwipeLimits: UIEdgeInsets;

	cellSwipeTreshold: number;

	contentInset: UIEdgeInsets;

	contentOffset: CGPoint;

	dataSource: TKListViewDataSource;

	delegate: TKListViewDelegate;

	deselectOnSecondTap: boolean;

	readonly indexPathsForSelectedItems: NSArray<any>;

	readonly indexPathsForVisibleItems: NSArray<NSIndexPath>;

	layout: UICollectionViewLayout;

	loadOnDemandBufferSize: number;

	loadOnDemandMode: TKListViewLoadOnDemandMode;

	loadOnDemandView: TKListViewLoadOnDemandView;

	readonly numberOfSections: number;

	pullToRefreshTreshold: number;

	pullToRefreshView: TKListViewPullToRefreshView;

	reorderMode: TKListViewReorderMode;

	scrollDirection: TKListViewScrollDirection;

	selectionBehavior: TKListViewSelectionBehavior;

	readonly visibleCells: NSArray<TKListViewCell>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	cellForItemAtIndexPath(indexPath: NSIndexPath): TKListViewCell;

	class(): typeof NSObject;

	clearSelectedItems(): void;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteItemsAtIndexPaths(indexPaths: NSArray<any>): void;

	dequeueLoadOnDemandCellForIndexPath(indexPath: NSIndexPath): TKListViewCell;

	dequeueReusableCellWithReuseIdentifierForIndexPath(identifier: string, indexPath: NSIndexPath): any;

	dequeueReusableSupplementaryViewOfKindWithReuseIdentifierForIndexPath(elementKind: string, identifier: string, indexPath: NSIndexPath): any;

	deselectItemAtIndexPathAnimated(indexPath: NSIndexPath, animated: boolean): void;

	didLoadDataOnDemand(): void;

	didRefreshOnPull(): void;

	endSwipe(animated: boolean): void;

	indexPathForCell(cell: UICollectionViewCell): NSIndexPath;

	indexPathForItemAtPoint(point: CGPoint): NSIndexPath;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	insertItemsAtIndexPaths(indexPaths: NSArray<any>): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	moveItemAtIndexPathToIndexPath(indexPath: NSIndexPath, newIndexPath: NSIndexPath): void;

	numberOfItemsInSection(section: number): number;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performBatchUpdatesCompletion(updates: () => void, completion: (p1: boolean) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerClassForCellWithReuseIdentifier(cellClass: typeof NSObject, identifier: string): void;

	registerClassForSupplementaryViewOfKindWithReuseIdentifier(viewClass: typeof NSObject, elementKind: string, identifier: string): void;

	registerLoadOnDemandCell(cellClass: typeof NSObject): void;

	registerNibForCellReuseIdentifier(nib: UINib, identifier: string): void;

	registerNibForSupplementaryViewOfKindWithReuseIdentifier(nib: UINib, elementKind: string, identifier: string): void;

	reloadData(): void;

	reloadItemsAtIndexPaths(indexPaths: NSArray<any>): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollToItemAtIndexPathAtScrollPositionAnimated(indexPath: NSIndexPath, scrollPosition: UICollectionViewScrollPosition, animated: boolean): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	selectItemAtIndexPathAnimatedScrollPosition(indexPath: NSIndexPath, animated: boolean, scrollPosition: UICollectionViewScrollPosition): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class TKListViewCell extends TKListViewReusableCell {

	static alloc(): TKListViewCell; // inherited from NSObject

	static appearance(): TKListViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKListViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKListViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKListViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKListViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKListViewCell; // inherited from UIAppearance

	static new(): TKListViewCell; // inherited from NSObject

	contentInsets: UIEdgeInsets;

	readonly detailTextLabel: UILabel;

	readonly imageView: UIImageView;

	offsetContentViewInMultipleSelection: boolean;

	reorderHandle: UIView;

	readonly swipeBackgroundView: UIView;

	shouldSelect(): boolean;
}

declare class TKListViewCellBackgroundView extends TKView {

	static alloc(): TKListViewCellBackgroundView; // inherited from NSObject

	static appearance(): TKListViewCellBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKListViewCellBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKListViewCellBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKListViewCellBackgroundView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKListViewCellBackgroundView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKListViewCellBackgroundView; // inherited from UIAppearance

	static new(): TKListViewCellBackgroundView; // inherited from NSObject

	allowsMultipleSelection: boolean;

	checkInset: number;

	readonly checkView: TKCheckView;

	isSelectedBackground: boolean;

	isVertical: boolean;

	updateStyle(): void;
}

interface TKListViewDataSource extends NSObjectProtocol {

	listViewCellForItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): TKListViewCell;

	listViewNumberOfItemsInSection(listView: TKListView, section: number): number;

	listViewViewForSupplementaryElementOfKindAtIndexPath?(listView: TKListView, kind: string, indexPath: NSIndexPath): TKListViewReusableCell;

	numberOfSectionsInListView?(listView: TKListView): number;
}
declare var TKListViewDataSource: {

	prototype: TKListViewDataSource;
};

interface TKListViewDelegate extends UIScrollViewDelegate {

	listViewDidDeselectItemAtIndexPath?(listView: TKListView, indexPath: NSIndexPath): void;

	listViewDidFinishSwipeCellAtIndexPathWithOffset?(listView: TKListView, cell: TKListViewCell, indexPath: NSIndexPath, offset: CGPoint): void;

	listViewDidHighlightItemAtIndexPath?(listView: TKListView, indexPath: NSIndexPath): void;

	listViewDidLongPressCellAtIndexPath?(listView: TKListView, cell: TKListViewCell, indexPath: NSIndexPath): void;

	listViewDidPullWithOffset?(listView: TKListView, offset: number): void;

	listViewDidReorderItemFromIndexPathToIndexPath?(listView: TKListView, originalIndexPath: NSIndexPath, targetIndexPath: NSIndexPath): void;

	listViewDidSelectItemAtIndexPath?(listView: TKListView, indexPath: NSIndexPath): void;

	listViewDidSwipeCellAtIndexPathWithOffset?(listView: TKListView, cell: TKListViewCell, indexPath: NSIndexPath, offset: CGPoint): void;

	listViewDidUnhighlightItemAtIndexPath?(listView: TKListView, indexPath: NSIndexPath): void;

	listViewShouldDeselectItemAtIndexPath?(listView: TKListView, indexPath: NSIndexPath): boolean;

	listViewShouldHighlightItemAtIndexPath?(listView: TKListView, indexPath: NSIndexPath): boolean;

	listViewShouldLoadMoreDataAtIndexPath?(listView: TKListView, indexPath: NSIndexPath): boolean;

	listViewShouldRefreshOnPull?(listView: TKListView): boolean;

	listViewShouldSelectItemAtIndexPath?(listView: TKListView, indexPath: NSIndexPath): boolean;

	listViewShouldSwipeCellAtIndexPath?(listView: TKListView, cell: TKListViewCell, indexPath: NSIndexPath): boolean;

	listViewWillReorderItemAtIndexPath?(listView: TKListView, indexPath: NSIndexPath): void;
}
declare var TKListViewDelegate: {

	prototype: TKListViewDelegate;
};

declare var TKListViewElementKindSectionFooter: string;

declare var TKListViewElementKindSectionHeader: string;

declare class TKListViewFooterCell extends TKListViewReusableCell {

	static alloc(): TKListViewFooterCell; // inherited from NSObject

	static appearance(): TKListViewFooterCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKListViewFooterCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKListViewFooterCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKListViewFooterCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKListViewFooterCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKListViewFooterCell; // inherited from UIAppearance

	static new(): TKListViewFooterCell; // inherited from NSObject
}

declare class TKListViewGridLayout extends TKListViewLinearLayout {

	static alloc(): TKListViewGridLayout; // inherited from NSObject

	static new(): TKListViewGridLayout; // inherited from NSObject

	lineSpacing: number;

	spanCount: number;
}

declare class TKListViewHeaderCell extends TKListViewReusableCell {

	static alloc(): TKListViewHeaderCell; // inherited from NSObject

	static appearance(): TKListViewHeaderCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKListViewHeaderCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKListViewHeaderCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKListViewHeaderCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKListViewHeaderCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKListViewHeaderCell; // inherited from UIAppearance

	static new(): TKListViewHeaderCell; // inherited from NSObject
}

declare const enum TKListViewItemAlignment {

	Stretch = 0,

	Left = 1,

	Center = 2,

	Right = 3
}

declare const enum TKListViewItemAnimation {

	Default = 0,

	Fade = 1,

	Scale = 2,

	Slide = 3
}

declare class TKListViewLinearLayout extends UICollectionViewLayout {

	static alloc(): TKListViewLinearLayout; // inherited from NSObject

	static new(): TKListViewLinearLayout; // inherited from NSObject

	animationDuration: number;

	delegate: TKListViewLinearLayoutDelegate;

	dynamicItemSize: boolean;

	footerReferenceSize: CGSize;

	headerReferenceSize: CGSize;

	itemAlignment: TKListViewItemAlignment;

	itemAppearAnimation: TKListViewItemAnimation;

	itemDeleteAnimation: TKListViewItemAnimation;

	itemInsertAnimation: TKListViewItemAnimation;

	itemSize: CGSize;

	itemSpacing: number;

	owner: TKListView;

	scrollDirection: TKListViewScrollDirection;

	calculatedItemWidth(): number;

	initFooterAttributesAtPoint(attributes: UICollectionViewLayoutAttributes, point: CGPoint): CGPoint;

	initHeaderAttributesAtPoint(attributes: UICollectionViewLayoutAttributes, point: CGPoint): CGPoint;

	initItemAttributesAtPointLastInSection(attributes: UICollectionViewLayoutAttributes, point: CGPoint, lastInSection: boolean): CGPoint;

	layoutSectionAtPoint(section: number, location: CGPoint): CGPoint;
}

interface TKListViewLinearLayoutDelegate extends NSObjectProtocol {

	listViewLayoutSizeForItemAtIndexPath(listView: TKListView, layout: TKListViewLinearLayout, indexPath: NSIndexPath): CGSize;
}
declare var TKListViewLinearLayoutDelegate: {

	prototype: TKListViewLinearLayoutDelegate;
};

declare class TKListViewLoadOnDemandCell extends TKListViewCell {

	static alloc(): TKListViewLoadOnDemandCell; // inherited from NSObject

	static appearance(): TKListViewLoadOnDemandCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKListViewLoadOnDemandCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKListViewLoadOnDemandCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKListViewLoadOnDemandCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKListViewLoadOnDemandCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKListViewLoadOnDemandCell; // inherited from UIAppearance

	static new(): TKListViewLoadOnDemandCell; // inherited from NSObject

	activityIndicator: UIActivityIndicatorView;

	updateState(): void;
}

declare const enum TKListViewLoadOnDemandMode {

	None = 0,

	Manual = 1,

	Auto = 2
}

declare class TKListViewLoadOnDemandView extends UIView {

	static alloc(): TKListViewLoadOnDemandView; // inherited from NSObject

	static appearance(): TKListViewLoadOnDemandView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKListViewLoadOnDemandView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKListViewLoadOnDemandView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKListViewLoadOnDemandView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKListViewLoadOnDemandView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKListViewLoadOnDemandView; // inherited from UIAppearance

	static new(): TKListViewLoadOnDemandView; // inherited from NSObject
}

declare class TKListViewPullToRefreshView extends UIView {

	static alloc(): TKListViewPullToRefreshView; // inherited from NSObject

	static appearance(): TKListViewPullToRefreshView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKListViewPullToRefreshView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKListViewPullToRefreshView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKListViewPullToRefreshView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKListViewPullToRefreshView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKListViewPullToRefreshView; // inherited from UIAppearance

	static new(): TKListViewPullToRefreshView; // inherited from NSObject

	readonly activityIndicator: UIActivityIndicatorView;

	startAnimating(): void;

	stopAnimating(): void;
}

declare class TKListViewReorderHandle extends UIView {

	static alloc(): TKListViewReorderHandle; // inherited from NSObject

	static appearance(): TKListViewReorderHandle; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKListViewReorderHandle; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKListViewReorderHandle; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKListViewReorderHandle; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKListViewReorderHandle; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKListViewReorderHandle; // inherited from UIAppearance

	static new(): TKListViewReorderHandle; // inherited from NSObject

	lineInsets: UIEdgeInsets;

	lineStroke: TKStroke;

	rowCount: number;

	rowSpacing: number;
}

declare const enum TKListViewReorderMode {

	WithHandle = 0,

	WithLongPress = 1
}

declare class TKListViewReusableCell extends UICollectionViewCell {

	static alloc(): TKListViewReusableCell; // inherited from NSObject

	static appearance(): TKListViewReusableCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKListViewReusableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKListViewReusableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKListViewReusableCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKListViewReusableCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKListViewReusableCell; // inherited from UIAppearance

	static new(): TKListViewReusableCell; // inherited from NSObject

	readonly textLabel: UILabel;
}

declare const enum TKListViewScrollDirection {

	Vertical = 0,

	Horizontal = 1
}

declare const enum TKListViewSelectionBehavior {

	None = 0,

	Press = 1,

	LongPress = 2
}

declare class TKListViewStaggeredLayout extends TKListViewGridLayout {

	static alloc(): TKListViewStaggeredLayout; // inherited from NSObject

	static new(): TKListViewStaggeredLayout; // inherited from NSObject

	alignLastLine: boolean;
}

declare class TKMutableArray extends NSObject implements NSFastEnumeration {

	static alloc(): TKMutableArray; // inherited from NSObject

	static new(): TKMutableArray; // inherited from NSObject

	readonly array: NSArray<any>;
	[index: number]: any;
	[Symbol.iterator](): Iterator<any>;

	constructor(o: { array: NSArray<any>; });

	addObject(object: any): void;

	count(): number;

	firstObject(): any;

	initWithArray(array: NSArray<any>): this;

	lastObject(): any;

	objectAtIndex(index: number): any;

	objectAtIndexedSubscript(idx: number): any;

	removeObject(object: any): void;

	removeObjectAtIndex(index: number): void;

	setObjectAtIndexedSubscript(obj: any, idx: number): void;
}

declare class TKObservableArray extends NSObject implements NSFastEnumeration {

	static alloc(): TKObservableArray; // inherited from NSObject

	static new(): TKObservableArray; // inherited from NSObject

	readonly array: NSArray<any>;

	readonly count: number;

	delegate: TKObservableArrayDelegate;
	[index: number]: any;
	[Symbol.iterator](): Iterator<any>;

	addObject(object: any): void;

	containsObject(object: any): boolean;

	indexOfObject(object: any): number;

	objectAtIndex(index: number): any;

	objectAtIndexedSubscript(idx: number): any;

	removeObject(object: any): void;

	removeObjectAtIndex(index: number): void;

	setObjectAtIndexedSubscript(obj: any, idx: number): void;
}

interface TKObservableArrayDelegate extends NSObjectProtocol {

	didAddObjectAtIndex?(object: any, index: number): void;

	didRemoveObjectAtIndex?(object: any, index: number): void;

	didSetObjectAtIndexOfOldObject?(object: any, index: number, oldObject: any): void;
}
declare var TKObservableArrayDelegate: {

	prototype: TKObservableArrayDelegate;
};

declare class TKPredefinedShape extends TKShape {

	static alloc(): TKPredefinedShape; // inherited from NSObject

	static new(): TKPredefinedShape; // inherited from NSObject

	static shapeWithTypeAndSize(type: TKShapeType, size: CGSize): TKPredefinedShape;

	readonly type: TKShapeType;

	constructor(o: { type: TKShapeType; andSize: CGSize; });

	initWithTypeAndSize(type: TKShapeType, size: CGSize): this;
}

declare class TKRadialGauge extends TKGauge {

	static alloc(): TKRadialGauge; // inherited from NSObject

	static appearance(): TKRadialGauge; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKRadialGauge; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKRadialGauge; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKRadialGauge; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKRadialGauge; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKRadialGauge; // inherited from UIAppearance

	static new(): TKRadialGauge; // inherited from NSObject

	labelSpacing: number;
}

declare class TKRadialGradientFill extends TKGradientFill {

	static alloc(): TKRadialGradientFill; // inherited from NSObject

	static new(): TKRadialGradientFill; // inherited from NSObject

	static radialGradientFillWithColors(colors: NSArray<any>): TKRadialGradientFill;

	static reverse(fill: TKRadialGradientFill): TKRadialGradientFill;

	endCenter: CGPoint;

	endRadius: number;

	gradientRadiusType: TKGradientRadiusType;

	startCenter: CGPoint;

	startRadius: number;

	constructor(o: { colors: NSArray<any>; startCenter: CGPoint; startRadius: number; endCenter: CGPoint; endRadius: number; });

	constructor(o: { colors: NSArray<any>; startCenter: CGPoint; startRadius: number; endCenter: CGPoint; endRadius: number; radiusType: TKGradientRadiusType; });

	initWithColorsStartCenterStartRadiusEndCenterEndRadius(colors: NSArray<any>, startCenter: CGPoint, startRadius: number, endCenter: CGPoint, endRadius: number): this;

	initWithColorsStartCenterStartRadiusEndCenterEndRadiusRadiusType(colors: NSArray<any>, startCenter: CGPoint, startRadius: number, endCenter: CGPoint, endRadius: number, radiusType: TKGradientRadiusType): this;
}

declare class TKRange extends NSObject {

	static alloc(): TKRange; // inherited from NSObject

	static new(): TKRange; // inherited from NSObject

	static rangeWithMinimumAndMaximum(minimum: any, maximum: any): TKRange;

	static rangeWithMinimumIndexAndMaximumIndex(minimumIndex: number, maximumIndex: number): TKRange;

	maximum: any;

	minimum: any;

	constructor(o: { minimum: any; andMaximum: any; });

	initWithMinimumAndMaximum(minimum: any, maximum: any): this;

	setMinimumAndMaximum(minimum: any, maximum: any): void;

	setMinimumAndMaximumCalcWithCurrent(minimum: any, maximum: any, includeCurrentRange: boolean): void;
}

declare const enum TKRectSide {

	Top = 1,

	Bottom = 2,

	Left = 4,

	Right = 8,

	All = -1
}

declare class TKShape extends NSObject {

	static alloc(): TKShape; // inherited from NSObject

	static new(): TKShape; // inherited from NSObject

	readonly insets: UIEdgeInsets;

	size: CGSize;

	constructor(o: { size: CGSize; });

	drawInContextWithCenterDrawings(context: any, center: CGPoint, drawings: NSArray<any>): void;

	drawInContextWithCenterDrawingsScale(context: any, center: CGPoint, drawings: NSArray<any>, scale: number): void;

	initWithSize(size: CGSize): this;
}

declare const enum TKShapeType {

	None = 0,

	Square = 1,

	Circle = 2,

	TriangleUp = 3,

	TriangleDown = 4,

	Rhombus = 5,

	Pentagon = 6,

	Hexagon = 7,

	Star = 8,

	Heart = 9
}

declare class TKSideDrawer extends TKView {

	static alloc(): TKSideDrawer; // inherited from NSObject

	static appearance(): TKSideDrawer; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKSideDrawer; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKSideDrawer; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKSideDrawer; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKSideDrawer; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKSideDrawer; // inherited from UIAppearance

	static findSideDrawerAtIndexForViewController(index: number, viewController: UIViewController): TKSideDrawer;

	static new(): TKSideDrawer; // inherited from NSObject

	allowEdgeSwipe: boolean;

	allowGestures: boolean;

	allowScroll: boolean;

	cancelTransition: boolean;

	content: UIView;

	delegate: TKSideDrawerDelegate;

	edgeSwipeTreshold: number;

	footerView: UIView;

	headerView: UIView;

	readonly hostview: UIView;

	readonly isVisible: boolean;

	position: TKSideDrawerPosition;

	readonly sections: NSArray<any>;

	readonly style: TKSideDrawerStyle;

	theme: TKTheme;

	title: string;

	transition: TKSideDrawerTransitionType;

	transitionDuration: number;

	transitionManager: TKSideDrawerTransition;

	width: number;

	addSection(section: TKSideDrawerSection): void;

	addSectionWithTitle(title: string): TKSideDrawerSection;

	addSectionWithTitleImage(title: string, image: UIImage): TKSideDrawerSection;

	dismiss(): void;

	insertSectionAtIndex(section: TKSideDrawerSection, index: number): void;

	removeAllSections(): void;

	removeSection(section: TKSideDrawerSection): void;

	selectItemAtIndexPath(indexPath: NSIndexPath): void;

	show(): void;

	showWithTransition(transition: TKSideDrawerTransitionType): void;
}

declare const enum TKSideDrawerBlurType {

	None = 0,

	Dynamic = 1,

	Static = 2
}

declare class TKSideDrawerController extends UIViewController {

	static alloc(): TKSideDrawerController; // inherited from NSObject

	static new(): TKSideDrawerController; // inherited from NSObject

	contentController: UIViewController;

	readonly defaultSideDrawer: TKSideDrawer;

	readonly sideDrawers: NSArray<any>;

	constructor(o: { content: UIViewController; });

	addSideDrawer(sideDrawer: TKSideDrawer): void;

	addSideDrawerAtPosition(position: TKSideDrawerPosition): TKSideDrawer;

	initWithContent(contentController: UIViewController): this;

	removeAllSideDrawers(): void;

	removeSideDrawer(sideDrawer: TKSideDrawer): void;
}

declare class TKSideDrawerDefaultTheme extends TKTheme {

	static alloc(): TKSideDrawerDefaultTheme; // inherited from NSObject

	static new(): TKSideDrawerDefaultTheme; // inherited from NSObject
}

interface TKSideDrawerDelegate extends NSObjectProtocol {

	didDismissSideDrawer?(sideDrawer: TKSideDrawer): void;

	didPanSideDrawer?(sideDrawer: TKSideDrawer): void;

	didShowSideDrawer?(sideDrawer: TKSideDrawer): void;

	sideDrawerCellForItemAtIndexPath?(sideDrawer: TKSideDrawer, indexPath: NSIndexPath): TKSideDrawerTableViewCell;

	sideDrawerDidSelectItemAtIndexPath?(sideDrawer: TKSideDrawer, indexPath: NSIndexPath): void;

	sideDrawerHeightForItemAtIndexPath?(sideDrawer: TKSideDrawer, indexPath: NSIndexPath): number;

	sideDrawerUpdateVisualsForItemAtIndexPath?(sideDrawer: TKSideDrawer, indexPath: NSIndexPath): void;

	sideDrawerUpdateVisualsForSection?(sideDrawer: TKSideDrawer, sectionIndex: number): void;

	sideDrawerViewForHeaderInSection?(sideDrawer: TKSideDrawer, sectionIndex: number): UIView;

	willDismissSideDrawer?(sideDrawer: TKSideDrawer): void;

	willShowSideDrawer?(sideDrawer: TKSideDrawer): void;
}
declare var TKSideDrawerDelegate: {

	prototype: TKSideDrawerDelegate;
};

declare class TKSideDrawerHeader extends TKView {

	static alloc(): TKSideDrawerHeader; // inherited from NSObject

	static appearance(): TKSideDrawerHeader; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKSideDrawerHeader; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKSideDrawerHeader; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKSideDrawerHeader; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKSideDrawerHeader; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKSideDrawerHeader; // inherited from UIAppearance

	static new(): TKSideDrawerHeader; // inherited from NSObject

	actionButton: UIButton;

	buttonPosition: TKSideDrawerHeaderButtonPosition;

	contentInsets: UIEdgeInsets;

	imagePosition: TKSideDrawerItemImagePosition;

	readonly imageView: UIImageView;

	readonly separator: UIView;

	separatorColor: TKFill;

	readonly stack: TKCoreStackLayout;

	readonly titleLabel: UILabel;

	constructor(o: { title: string; });

	constructor(o: { title: string; button: UIButton; });

	constructor(o: { title: string; button: UIButton; image: UIImage; });

	constructor(o: { title: string; image: UIImage; });

	initWithTitle(title: string): this;

	initWithTitleButton(title: string, button: UIButton): this;

	initWithTitleButtonImage(title: string, button: UIButton, image: UIImage): this;

	initWithTitleImage(title: string, image: UIImage): this;
}

declare const enum TKSideDrawerHeaderButtonPosition {

	Left = 0,

	Right = 1,

	Top = 2,

	Bottom = 3
}

declare class TKSideDrawerItem extends NSObject {

	static alloc(): TKSideDrawerItem; // inherited from NSObject

	static new(): TKSideDrawerItem; // inherited from NSObject

	contentAlignment: TKSideDrawerTableViewCellContentAlignment;

	image: UIImage;

	readonly style: TKSideDrawerItemStyle;

	title: string;

	constructor(o: { title: string; });

	constructor(o: { title: string; image: UIImage; });

	initWithTitle(title: string): this;

	initWithTitleImage(title: string, image: UIImage): this;
}

declare const enum TKSideDrawerItemImagePosition {

	Left = 0,

	Right = 1,

	Top = 2,

	Bottom = 3
}

declare class TKSideDrawerItemStyle extends TKStyleNode {

	static alloc(): TKSideDrawerItemStyle; // inherited from NSObject

	static new(): TKSideDrawerItemStyle; // inherited from NSObject

	contentInsets: UIEdgeInsets;

	fill: TKFill;

	font: UIFont;

	imagePosition: TKSideDrawerItemImagePosition;

	separatorColor: TKFill;

	stroke: TKStroke;

	textAlignment: NSTextAlignment;

	textColor: UIColor;
}

declare const enum TKSideDrawerPosition {

	Left = 0,

	Right = 1,

	Top = 2,

	Bottom = 3
}

declare class TKSideDrawerSection extends TKSideDrawerItem {

	static alloc(): TKSideDrawerSection; // inherited from NSObject

	static new(): TKSideDrawerSection; // inherited from NSObject

	readonly items: NSArray<any>;

	addItem(item: TKSideDrawerItem): void;

	addItemWithTitle(title: string): TKSideDrawerItem;

	addItemWithTitleImage(title: string, image: UIImage): TKSideDrawerItem;

	insertItemAtIndex(item: TKSideDrawerItem, index: number): void;

	removeAllItems(): void;

	removeItem(item: TKSideDrawerItem): void;
}

declare const enum TKSideDrawerShadowMode {

	None = 0,

	Hostview = 1,

	SideDrawer = 2
}

declare class TKSideDrawerStyle extends TKStyleNode {

	static alloc(): TKSideDrawerStyle; // inherited from NSObject

	static new(): TKSideDrawerStyle; // inherited from NSObject

	blurEffect: UIBlurEffectStyle;

	blurTintColor: UIColor;

	blurType: TKSideDrawerBlurType;

	dimOpacity: number;

	footerHeight: number;

	headerHeight: number;

	itemHeight: number;

	sectionHeaderHeight: number;

	shadowMode: TKSideDrawerShadowMode;

	shadowOffset: CGSize;

	shadowOpacity: number;

	shadowRadius: number;
}

declare class TKSideDrawerTableView extends UITableView implements UITableViewDataSource, UITableViewDelegate {

	static alloc(): TKSideDrawerTableView; // inherited from NSObject

	static appearance(): TKSideDrawerTableView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKSideDrawerTableView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKSideDrawerTableView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKSideDrawerTableView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKSideDrawerTableView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKSideDrawerTableView; // inherited from UIAppearance

	static new(): TKSideDrawerTableView; // inherited from NSObject

	sideDrawer: TKSideDrawer;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { sideDrawer: TKSideDrawer; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithSideDrawer(sideDrawer: TKSideDrawer): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class TKSideDrawerTableViewCell extends UITableViewCell {

	static alloc(): TKSideDrawerTableViewCell; // inherited from NSObject

	static appearance(): TKSideDrawerTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKSideDrawerTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKSideDrawerTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKSideDrawerTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKSideDrawerTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKSideDrawerTableViewCell; // inherited from UIAppearance

	static new(): TKSideDrawerTableViewCell; // inherited from NSObject

	item: TKSideDrawerItem;

	separator: UIView;

	readonly stack: TKCoreStackLayout;

	update(): void;
}

declare const enum TKSideDrawerTableViewCellContentAlignment {

	Left = 0,

	Right = 1,

	Center = 2
}

declare class TKSideDrawerTransition extends NSObject {

	static alloc(): TKSideDrawerTransition; // inherited from NSObject

	static new(): TKSideDrawerTransition; // inherited from NSObject

	sideDrawer: TKSideDrawer;

	constructor(o: { sideDrawer: TKSideDrawer; });

	dismiss(): void;

	handleGesture(gestureRecognizer: UIGestureRecognizer): void;

	initWithSideDrawer(sideDrawer: TKSideDrawer): this;

	show(): void;

	transitionBegan(showing: boolean): void;

	transitionEnded(showing: boolean): void;
}

declare const enum TKSideDrawerTransitionType {

	SlideInOnTop = 0,

	Reveal = 1,

	Push = 2,

	SlideAlong = 3,

	ReverseSlideOut = 4,

	ScaleUp = 5,

	FadeIn = 6,

	ScaleDownPusher = 7,

	Custom = 8
}

declare class TKSideDrawerView extends UIView {

	static alloc(): TKSideDrawerView; // inherited from NSObject

	static appearance(): TKSideDrawerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKSideDrawerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKSideDrawerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKSideDrawerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKSideDrawerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKSideDrawerView; // inherited from UIAppearance

	static new(): TKSideDrawerView; // inherited from NSObject

	readonly defaultSideDrawer: TKSideDrawer;

	mainView: UIView;

	readonly sideDrawers: NSArray<TKSideDrawer>;

	constructor(o: { frame: CGRect; mainView: UIView; });

	addSideDrawer(sideDrawer: TKSideDrawer): void;

	addSideDrawerAtPosition(position: TKSideDrawerPosition): TKSideDrawer;

	attachDrawerToWindow(): void;

	detachDrawerFromWindow(): void;

	initWithFrameMainView(frame: CGRect, mainView: UIView): this;

	removeAllSideDrawers(): void;

	removeSideDrawer(sideDrawer: TKSideDrawer): void;
}

declare class TKSlideView extends UIView {

	static alloc(): TKSlideView; // inherited from NSObject

	static appearance(): TKSlideView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKSlideView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKSlideView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKSlideView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKSlideView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKSlideView; // inherited from UIAppearance

	static new(): TKSlideView; // inherited from NSObject

	currentView: UIView;

	delegate: TKSlideViewDelegate;

	disableSwipe: boolean;

	slideDirection: TKSwipeDirection;

	next(): void;

	previous(): void;
}

interface TKSlideViewDelegate extends NSObjectProtocol {

	slideViewDidSlideToView?(view: UIView): void;

	slideViewWillSlideToView?(view: UIView): boolean;
}
declare var TKSlideViewDelegate: {

	prototype: TKSlideViewDelegate;
};

declare class TKSolidFill extends TKFill {

	static alloc(): TKSolidFill; // inherited from NSObject

	static new(): TKSolidFill; // inherited from NSObject

	static solidFillWithColor(color: UIColor): TKSolidFill;

	static solidFillWithColorCornerRadius(color: UIColor, cornerRadius: number): TKSolidFill;

	color: UIColor;

	constructor(o: { color: UIColor; });

	constructor(o: { color: UIColor; cornerRadius: number; });

	initWithColor(color: UIColor): this;

	initWithColorCornerRadius(color: UIColor, cornerRadius: number): this;
}

declare class TKStackLayout extends NSObject implements TKLayout {

	static alloc(): TKStackLayout; // inherited from NSObject

	static new(): TKStackLayout; // inherited from NSObject

	alignment: TKStackLayoutAlignment;

	readonly arrangedViews: NSArray<any>;

	distribution: TKStackLayoutDistribution;

	spacing: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	frame: CGRect; // inherited from TKLayout

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	orientation: TKLayoutOrientation; // inherited from TKLayout

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { frame: CGRect; });

	addArrangedView(view: UIView): void;

	arrangeViewWithLayoutInfo(view: UIView, layoutInfo: TKLayoutInfo): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithFrame(frame: CGRect): this;

	insertArrangedViewAtIndex(view: UIView, index: number): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	layoutArrangedViews(): void;

	measurePreferredSizeThatFitsSize(size: CGSize): CGSize;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAllArrangedViews(): void;

	removeArrangedView(view: UIView): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum TKStackLayoutAlignment {

	Fill = 0,

	Top = 1,

	Center = 2,

	Bottom = 3,

	Leading = 4,

	Trailing = 5
}

declare const enum TKStackLayoutDistribution {

	None = 0,

	FillEqually = 1,

	FillProportionally = 2
}

declare class TKStroke extends NSObject implements NSCopying, TKDrawing {

	static alloc(): TKStroke; // inherited from NSObject

	static new(): TKStroke; // inherited from NSObject

	static strokeWithColor(color: UIColor): TKStroke;

	static strokeWithColorWidth(color: UIColor, width: number): TKStroke;

	static strokeWithColorWidthCornerRadius(color: UIColor, width: number, cornerRadius: number): TKStroke;

	static strokeWithFill(fill: TKFill): TKStroke;

	static strokeWithFillWidth(fill: TKFill, width: number): TKStroke;

	static strokeWithFillWidthCornerRadius(fill: TKFill, width: number, cornerRadius: number): TKStroke;

	allowsAntialiasing: boolean;

	color: UIColor;

	cornerRadius: number;

	corners: UIRectCorner;

	dashPattern: NSArray<any>;

	fill: TKFill;

	lineCap: CGLineCap;

	lineJoin: CGLineJoin;

	miterLimit: number;

	phase: number;

	shadowBlur: number;

	shadowColor: UIColor;

	shadowOffset: CGSize;

	strokeSides: TKRectSide;

	width: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	insets: UIEdgeInsets; // inherited from TKDrawing

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { color: UIColor; });

	constructor(o: { color: UIColor; width: number; });

	constructor(o: { fill: TKFill; });

	constructor(o: { fill: TKFill; width: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	drawInContextWithPath(context: any, path: any): void;

	drawInContextWithRect(context: any, rect: CGRect): void;

	initWithColor(color: UIColor): this;

	initWithColorWidth(color: UIColor, width: number): this;

	initWithFill(fill: TKFill): this;

	initWithFillWidth(fill: TKFill, width: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKStyleID extends NSObject {

	static alloc(): TKStyleID; // inherited from NSObject

	static new(): TKStyleID; // inherited from NSObject

	conditionClass: typeof NSObject;

	state: number;

	stylableClass: typeof NSObject;

	constructor(o: { class: typeof NSObject; withState: number; });

	initWithClassWithState(aStylableClass: typeof NSObject, aState: number): this;
}

declare class TKStyleNode extends NSObject {

	static alloc(): TKStyleNode; // inherited from NSObject

	static new(): TKStyleNode; // inherited from NSObject

	readonly isThemeBlock: boolean;

	styleID: TKStyleID;

	beginThemeBlock(): void;

	canSetValue(value: number): boolean;

	endThemeBlock(): void;

	resetLocalValues(): void;
}

declare class TKSuggestionListView extends TKListView implements TKAutoCompleteSuggestViewDelegate, TKListViewDataSource, TKListViewDelegate {

	static alloc(): TKSuggestionListView; // inherited from NSObject

	static appearance(): TKSuggestionListView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKSuggestionListView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKSuggestionListView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKSuggestionListView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKSuggestionListView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKSuggestionListView; // inherited from UIAppearance

	static new(): TKSuggestionListView; // inherited from NSObject

	items: NSArray<TKAutoCompleteToken>;

	owner: TKAutoCompleteTextView;

	readonly progressBar: UIProgressView;

	selectedIndexPath: NSIndexPath;

	selectedItem: TKAutoCompleteToken;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { autoComplete: TKAutoCompleteTextView; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	hide(): void;

	initWithAutoComplete(autocomplete: TKAutoCompleteTextView): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	listViewCellForItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): TKListViewCell;

	listViewDidDeselectItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): void;

	listViewDidFinishSwipeCellAtIndexPathWithOffset(listView: TKListView, cell: TKListViewCell, indexPath: NSIndexPath, offset: CGPoint): void;

	listViewDidHighlightItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): void;

	listViewDidLongPressCellAtIndexPath(listView: TKListView, cell: TKListViewCell, indexPath: NSIndexPath): void;

	listViewDidPullWithOffset(listView: TKListView, offset: number): void;

	listViewDidReorderItemFromIndexPathToIndexPath(listView: TKListView, originalIndexPath: NSIndexPath, targetIndexPath: NSIndexPath): void;

	listViewDidSelectItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): void;

	listViewDidSwipeCellAtIndexPathWithOffset(listView: TKListView, cell: TKListViewCell, indexPath: NSIndexPath, offset: CGPoint): void;

	listViewDidUnhighlightItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): void;

	listViewNumberOfItemsInSection(listView: TKListView, section: number): number;

	listViewShouldDeselectItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): boolean;

	listViewShouldHighlightItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): boolean;

	listViewShouldLoadMoreDataAtIndexPath(listView: TKListView, indexPath: NSIndexPath): boolean;

	listViewShouldRefreshOnPull(listView: TKListView): boolean;

	listViewShouldSelectItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): boolean;

	listViewShouldSwipeCellAtIndexPath(listView: TKListView, cell: TKListViewCell, indexPath: NSIndexPath): boolean;

	listViewViewForSupplementaryElementOfKindAtIndexPath(listView: TKListView, kind: string, indexPath: NSIndexPath): TKListViewReusableCell;

	listViewWillReorderItemAtIndexPath(listView: TKListView, indexPath: NSIndexPath): void;

	numberOfSectionsInListView(listView: TKListView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	populateWithItems(items: NSArray<TKAutoCompleteToken>): void;

	reloadSuggestions(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	shouldAlwaysHideSuggestionView(): boolean;

	show(): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare const enum TKSwipeDirection {

	Horizontal = 0,

	Vertical = 1
}

declare class TKTab extends NSObject {

	static alloc(): TKTab; // inherited from NSObject

	static new(): TKTab; // inherited from NSObject

	contentView: UIView;

	readonly title: string;

	view: TKTabItemView;

	constructor(o: { title: string; });

	constructor(o: { title: string; andView: UIView; });

	initWithTitle(title: string): this;

	initWithTitleAndView(title: string, view: UIView): this;
}

declare const enum TKTabAlignment {

	Top = 0,

	Bottom = 1,

	Left = 2,

	Right = 3,

	Center = 4,

	Stretch = 5
}

declare class TKTabItemView extends UIView {

	static alloc(): TKTabItemView; // inherited from NSObject

	static appearance(): TKTabItemView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKTabItemView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKTabItemView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKTabItemView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKTabItemView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKTabItemView; // inherited from UIAppearance

	static new(): TKTabItemView; // inherited from NSObject

	accentColor: UIColor;

	deselectedBackgroundColor: UIColor;

	deselectedForegroundColor: UIColor;

	deselectedImage: UIImage;

	imageView: UIImageView;

	selected: boolean;

	selectedBackgroundColor: UIColor;

	selectedForegroundColor: UIColor;

	selectedImage: UIImage;

	textView: UILabel;
}

interface TKTabLayout extends NSObjectProtocol {

	delegate: TKTabLayoutDelegate;

	maxVisibleTabs: number;

	selectedTabMarker: UIView;

	selectedTabMarkerHeight: number;

	tabAlignment: TKTabAlignment;

	tabHeight: number;

	tabWidth: number;

	didAddTab(tab: TKTab): void;

	didRemoveTab(tab: TKTab): void;

	didSelectTabDeselectedTab(selectedTab: TKTab, deselectedTab: TKTab): void;

	layoutTabsInFrame(frame: CGRect): void;

	load(tabView: TKTabStrip): void;

	unload(): void;

	updateSelectedTabMarkerForTab(selectedTab: TKTab): void;
}
declare var TKTabLayout: {

	prototype: TKTabLayout;
};

declare class TKTabLayoutBase extends NSObject implements TKTabLayout {

	static alloc(): TKTabLayoutBase; // inherited from NSObject

	static new(): TKTabLayoutBase; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: TKTabLayoutDelegate; // inherited from TKTabLayout

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	maxVisibleTabs: number; // inherited from TKTabLayout

	selectedTabMarker: UIView; // inherited from TKTabLayout

	selectedTabMarkerHeight: number; // inherited from TKTabLayout

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	tabAlignment: TKTabAlignment; // inherited from TKTabLayout

	tabHeight: number; // inherited from TKTabLayout

	tabWidth: number; // inherited from TKTabLayout

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didAddTab(tab: TKTab): void;

	didRemoveTab(tab: TKTab): void;

	didSelectTabDeselectedTab(selectedTab: TKTab, deselectedTab: TKTab): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	layoutTabsInFrame(frame: CGRect): void;

	load(tabView: TKTabStrip): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	unload(): void;

	updateSelectedTabMarkerForTab(selectedTab: TKTab): void;
}

interface TKTabLayoutDelegate extends NSObjectProtocol {

	layoutSelectedTabMarker(availableSpace: CGRect): CGRect;
}
declare var TKTabLayoutDelegate: {

	prototype: TKTabLayoutDelegate;
};

declare class TKTabOverflowLayout extends TKTabLayoutBase {

	static alloc(): TKTabOverflowLayout; // inherited from NSObject

	static new(): TKTabOverflowLayout; // inherited from NSObject

	readonly overflowButton: UIButton;

	readonly overflowPopup: UIView;
}

declare class TKTabScrollLayout extends TKTabLayoutBase {

	static alloc(): TKTabScrollLayout; // inherited from NSObject

	static new(): TKTabScrollLayout; // inherited from NSObject

	readonly scrollView: UIScrollView;

	tabSpacing: number;
}

declare class TKTabStrip extends UIView {

	static alloc(): TKTabStrip; // inherited from NSObject

	static appearance(): TKTabStrip; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKTabStrip; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKTabStrip; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKTabStrip; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKTabStrip; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKTabStrip; // inherited from UIAppearance

	static new(): TKTabStrip; // inherited from NSObject

	animateSelectedMarker: boolean;

	delegate: TKTabStripDelegate;

	layout: TKTabLayout;

	selectedTab: TKTab;

	selectedTabMarker: UIView;

	selectedTabMarkerHeight: number;

	tabs: TKObservableArray;

	canSelectTab(tab: TKTab): boolean;

	findTabForContentView(view: UIView): TKTab;

	findTabForView(view: UIView): TKTab;

	requestLayout(): void;
}

interface TKTabStripDelegate extends NSObjectProtocol {

	tabStripDidSelectTab?(tab: TKTab): void;

	tabStripWillSelectTab?(tab: TKTab): boolean;
}
declare var TKTabStripDelegate: {

	prototype: TKTabStripDelegate;
};

declare class TKTabView extends UIView {

	static alloc(): TKTabView; // inherited from NSObject

	static appearance(): TKTabView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKTabView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKTabView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKTabView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKTabView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKTabView; // inherited from UIAppearance

	static new(): TKTabView; // inherited from NSObject

	delegate: TKTabViewDelegate;

	selectedTab: TKTab;

	slideView: TKSlideView;

	tabStrip: TKTabStrip;

	tabs: TKObservableArray;

	tabsPosition: TKTabViewPosition;

	constructor(o: { viewControllers: NSArray<any>; });

	addTabWithTitle(title: string): TKTab;

	addTabWithTitleAndContentView(title: string, contentView: UIView): TKTab;

	addTabWithTitleViewAndContentView(title: string, view: TKTabItemView, contentView: UIView): TKTab;

	initWithViewControllers(controllers: NSArray<any>): this;

	removeTab(tab: TKTab): boolean;

	removeTabWithTitle(title: string): void;

	tabWithTitle(title: string): TKTab;
}

interface TKTabViewDelegate extends NSObjectProtocol {

	adjustSlideViewLayout?(availableSpace: CGRect): CGRect;

	adjustTabStripLayout?(availableSpace: CGRect): CGRect;

	contentViewForTab?(tab: TKTab): UIView;

	tabViewDidSelectTab?(tab: TKTab): void;

	tabViewWillSelectTab?(tab: TKTab): boolean;

	viewForTab?(tab: TKTab): TKTabItemView;
}
declare var TKTabViewDelegate: {

	prototype: TKTabViewDelegate;
};

declare const enum TKTabViewPosition {

	Top = 0,

	Bottom = 1,

	Left = 2,

	Right = 3
}

declare class TKTextField extends UITextField {

	static alloc(): TKTextField; // inherited from NSObject

	static appearance(): TKTextField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKTextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKTextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKTextField; // inherited from UIAppearance

	static new(): TKTextField; // inherited from NSObject

	textInsets: UIEdgeInsets;
}

declare class TKTheme extends NSObject {

	static alloc(): TKTheme; // inherited from NSObject

	static new(): TKTheme; // inherited from NSObject
}

declare class TKView extends UIView {

	static alloc(): TKView; // inherited from NSObject

	static appearance(): TKView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKView; // inherited from UIAppearance

	static new(): TKView; // inherited from NSObject

	static versionString(): string;

	drawables: NSArray<any>;

	fill: TKFill;

	layout: TKCoreLayout;

	shape: TKShape;

	stroke: TKStroke;
}

declare class TKViewTransition extends UIView {

	static alloc(): TKViewTransition; // inherited from NSObject

	static appearance(): TKViewTransition; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKViewTransition; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKViewTransition; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKViewTransition; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKViewTransition; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKViewTransition; // inherited from UIAppearance

	static new(): TKViewTransition; // inherited from NSObject

	readonly isForward: boolean;

	readonly isVertical: boolean;

	transitionDuration: number;

	direction(): TKViewTransitionDirection;

	orientation(): TKViewTransitionOrientation;
}

declare const enum TKViewTransitionDirection {

	Forward = 0,

	Backward = 1
}

declare const enum TKViewTransitionOrientation {

	Horizontal = 0,

	Vertical = 1
}

declare class TelerikUI extends NSObject {

	static alloc(): TelerikUI; // inherited from NSObject

	static loadClasses(): void;

	static new(): TelerikUI; // inherited from NSObject

	static versionString(): string;
}
