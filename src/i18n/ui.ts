/**
 * Shared interface strings. Page-specific copy lives next to each page
 * (see src/pages/[lang]/*.astro) so both languages are edited side by side.
 *
 * To add a language: add it to LANGS, add a dictionary below with the same keys,
 * and translate the `bg`/`en` objects in pages and content JSON files.
 */
export const LANGS = ['bg', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'bg';

export const langMeta: Record<Lang, { name: string; short: string; htmlLang: string; ogLocale: string }> = {
  bg: { name: 'Български', short: 'BG', htmlLang: 'bg', ogLocale: 'bg_BG' },
  en: { name: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_GB' },
};

const bg = {
  'nav.home': 'Начало',
  'nav.products': 'Продукти и услуги',
  'nav.projects': 'Проекти',
  'nav.manufacturing': 'Производство',
  'nav.about': 'За нас',
  'nav.contact': 'Контакти',
  'nav.privacy': 'Поверителност',
  'nav.main': 'Основна навигация',

  'header.skip': 'Към основното съдържание',
  'header.menu': 'Меню',
  'header.language': 'Език',

  'cta.quote': 'Поискайте оферта',
  'cta.projects': 'Вижте проектите',
  'cta.allProjects': 'Всички проекти',
  'cta.allServices': 'Всички продукти и услуги',
  'cta.learnMore': 'Научете повече',
  'cta.similar': 'Поискайте оферта за подобен проект',
  'cta.manufacturing': 'Производствени възможности',

  'ph.phone': '[телефон]',
  'ph.email': '[имейл]',
  'ph.address': '[адрес]',

  'contact.phone': 'Телефон',
  'contact.email': 'Имейл',
  'contact.address': 'Адрес',
  'contact.base': 'Производствена база',
  'contact.hours': 'Работно време',
  'contact.map': 'Отворете на картата',

  'footer.tagline':
    'Проектиране, изработка и монтаж на парапети, стълби, козирки, врати, огради и метални конструкции.',
  'footer.partOf': '{brand} е част от {legal}, която обединява бизнес направленията на групата.',
  'footer.navigation': 'Навигация',
  'footer.services': 'Продукти и услуги',
  'footer.contact': 'Контакт',
  'footer.rights': 'Всички права запазени.',
  'footer.preview': 'Предварителна версия — някои данни за контакт предстои да бъдат потвърдени.',

  'crumb.home': 'Начало',
  'crumb.label': 'Навигационна пътека',

  'projects.filterLabel': 'Филтрирайте по категория',
  'projects.all': 'Всички проекти',
  'projects.showing': 'Показани проекти: {n}',
  'projects.photos': '{n} снимки',
  'projects.photo': '1 снимка',
  'projects.photosPending': 'Снимките предстоят',
  'projects.photosPendingNote':
    'Снимките на този проект се подготвят за новия сайт. Свържете се с нас, ако желаете да видите примери.',
  'projects.backTo': 'Всички проекти в „{cat}“',
  'projects.related': 'Свързани проекти',
  'projects.category': 'Категория',
  'projects.materials': 'Материали',
  'projects.service': 'Услуга',
  'projects.gallery': 'Снимки',
  'projects.open': 'Отворете снимка {i} от {n} в по-голям размер',
  'projects.empty': 'В тази категория все още няма публикувани проекти.',

  'lightbox.label': 'Преглед на снимки',
  'lightbox.close': 'Затвори',
  'lightbox.prev': 'Предишна снимка',
  'lightbox.next': 'Следваща снимка',
  'lightbox.counter': '{i} от {n}',

  'services.related': 'Изпълнени проекти',
  'services.includes': 'Какво предлагаме',
  'services.applications': 'Приложение',
  'services.materials': 'Материали и покрития',
  'services.other': 'Други продукти и услуги',
  'services.quoteTitle': 'Имате проект?',
  'services.quoteText':
    'Изпратете ни описание, размери и, ако имате, чертеж или снимки на мястото. Ще се свържем с вас, за да уточним детайлите и да подготвим оферта.',

  'form.title': 'Запитване за оферта',
  'form.intro': 'Полетата, отбелязани със *, са задължителни.',
  'form.name': 'Име и фамилия',
  'form.company': 'Фирма',
  'form.email': 'Имейл',
  'form.phone': 'Телефон',
  'form.service': 'Продукт или услуга',
  'form.servicePick': 'Изберете…',
  'form.serviceOther': 'Друго / не съм сигурен',
  'form.location': 'Населено място на обекта',
  'form.message': 'Описание на проекта',
  'form.messageHint': 'Какво трябва да бъде изработено, за какъв обект, вътре или отвън, желан материал и покритие.',
  'form.dimensions': 'Размери / технически данни',
  'form.dimensionsHint': 'Например: дължина на парапета 12 м, височина 1,1 м.',
  'form.timeframe': 'Желан срок',
  'form.timeframe.asap': 'Възможно най-скоро',
  'form.timeframe.1-3': 'В рамките на 1–3 месеца',
  'form.timeframe.3plus': 'След повече от 3 месеца',
  'form.timeframe.flexible': 'Гъвкав / не е определен',
  'form.files':
    'Имате чертеж или снимки? След като получим запитването, ще ви отговорим по имейл и ще можете да ги изпратите в отговор.',
  'form.consent': 'Съгласен/съгласна съм данните ми да бъдат използвани за отговор на запитването съгласно',
  'form.consentLink': 'политиката за поверителност',
  'form.optional': 'по желание',
  'form.submit': 'Изпратете запитването',
  'form.sending': 'Изпращане…',
  'form.success.title': 'Благодарим ви! Запитването е изпратено.',
  'form.success.text': 'Ще се свържем с вас в работно време, обикновено до един работен ден.',
  'form.error.title': 'Запитването не беше изпратено.',
  'form.error.text': 'Моля, опитайте отново след малко или се свържете с нас по телефон или имейл.',
  'form.error.network': 'Няма връзка със сървъра за формуляри. Проверете интернет връзката си и опитайте отново.',
  'form.notConfigured.title': 'Онлайн формата все още не е активирана.',
  'form.notConfigured.text':
    'В момента запитвания не се приемат през тази форма. Моля, свържете се с нас по телефон или имейл.',
  'form.invalid': 'Моля, коригирайте отбелязаните полета.',
  'form.err.required': 'Това поле е задължително.',
  'form.err.email': 'Въведете валиден имейл адрес, например ime@primer.bg.',
  'form.err.phone': 'Въведете валиден телефонен номер (само цифри, интервали, +, -, скоби).',
  'form.err.tooShort': 'Моля, опишете проекта с поне {n} символа.',
  'form.err.consent': 'Необходимо е съгласие, за да обработим запитването.',

  '404.title': 'Страницата не е намерена',
  '404.text': 'Страницата, която търсите, не съществува или е преместена.',
} as const;

export type UiKey = keyof typeof bg;

const en: Record<UiKey, string> = {
  'nav.home': 'Home',
  'nav.products': 'Products & Services',
  'nav.projects': 'Projects',
  'nav.manufacturing': 'Manufacturing',
  'nav.about': 'About us',
  'nav.contact': 'Contact',
  'nav.privacy': 'Privacy',
  'nav.main': 'Main navigation',

  'header.skip': 'Skip to main content',
  'header.menu': 'Menu',
  'header.language': 'Language',

  'cta.quote': 'Request a quote',
  'cta.projects': 'View our projects',
  'cta.allProjects': 'All projects',
  'cta.allServices': 'All products & services',
  'cta.learnMore': 'Learn more',
  'cta.similar': 'Request a quote for a similar project',
  'cta.manufacturing': 'Manufacturing capabilities',

  'ph.phone': '[phone]',
  'ph.email': '[email]',
  'ph.address': '[address]',

  'contact.phone': 'Phone',
  'contact.email': 'Email',
  'contact.address': 'Address',
  'contact.base': 'Production base',
  'contact.hours': 'Working hours',
  'contact.map': 'Open in maps',

  'footer.tagline':
    'Design, fabrication and installation of railings, stairs, canopies, doors, fences and metal structures.',
  'footer.partOf': '{brand} is part of {legal}, which brings together the group’s business lines.',
  'footer.navigation': 'Navigation',
  'footer.services': 'Products & services',
  'footer.contact': 'Contact',
  'footer.rights': 'All rights reserved.',
  'footer.preview': 'Preview version — some contact details are still to be confirmed.',

  'crumb.home': 'Home',
  'crumb.label': 'Breadcrumb',

  'projects.filterLabel': 'Filter by category',
  'projects.all': 'All projects',
  'projects.showing': 'Projects shown: {n}',
  'projects.photos': '{n} photos',
  'projects.photo': '1 photo',
  'projects.photosPending': 'Photos coming soon',
  'projects.photosPendingNote':
    'Photos of this project are being prepared for the new website. Contact us if you would like to see examples.',
  'projects.backTo': 'All projects in “{cat}”',
  'projects.related': 'Related projects',
  'projects.category': 'Category',
  'projects.materials': 'Materials',
  'projects.service': 'Service',
  'projects.gallery': 'Photos',
  'projects.open': 'Open photo {i} of {n} in a larger view',
  'projects.empty': 'There are no published projects in this category yet.',

  'lightbox.label': 'Photo viewer',
  'lightbox.close': 'Close',
  'lightbox.prev': 'Previous photo',
  'lightbox.next': 'Next photo',
  'lightbox.counter': '{i} of {n}',

  'services.related': 'Completed projects',
  'services.includes': 'What we offer',
  'services.applications': 'Typical applications',
  'services.materials': 'Materials & finishes',
  'services.other': 'Other products & services',
  'services.quoteTitle': 'Planning a project?',
  'services.quoteText':
    'Send us a description, dimensions and, if you have them, drawings or photos of the site. We will get back to you to clarify the details and prepare a quotation.',

  'form.title': 'Quotation request',
  'form.intro': 'Fields marked with * are required.',
  'form.name': 'Full name',
  'form.company': 'Company',
  'form.email': 'Email',
  'form.phone': 'Phone',
  'form.service': 'Product or service',
  'form.servicePick': 'Select…',
  'form.serviceOther': 'Other / not sure',
  'form.location': 'Project location (town/city)',
  'form.message': 'Project description',
  'form.messageHint': 'What needs to be made, for what kind of building, indoor or outdoor, preferred material and finish.',
  'form.dimensions': 'Dimensions / specifications',
  'form.dimensionsHint': 'For example: railing length 12 m, height 1.1 m.',
  'form.timeframe': 'Desired timeframe',
  'form.timeframe.asap': 'As soon as possible',
  'form.timeframe.1-3': 'Within 1–3 months',
  'form.timeframe.3plus': 'In more than 3 months',
  'form.timeframe.flexible': 'Flexible / not decided',
  'form.files':
    'Have drawings or photos? Once we receive your request we will reply by email, and you can send them in your reply.',
  'form.consent': 'I agree that my details may be used to respond to this request, in accordance with the',
  'form.consentLink': 'privacy policy',
  'form.optional': 'optional',
  'form.submit': 'Send request',
  'form.sending': 'Sending…',
  'form.success.title': 'Thank you! Your request has been sent.',
  'form.success.text': 'We will contact you during working hours, usually within one business day.',
  'form.error.title': 'Your request was not sent.',
  'form.error.text': 'Please try again in a moment or contact us by phone or email.',
  'form.error.network': 'Could not reach the form service. Please check your internet connection and try again.',
  'form.notConfigured.title': 'The online form is not active yet.',
  'form.notConfigured.text': 'Requests cannot be sent through this form at the moment. Please contact us by phone or email.',
  'form.invalid': 'Please correct the highlighted fields.',
  'form.err.required': 'This field is required.',
  'form.err.email': 'Enter a valid email address, e.g. name@example.com.',
  'form.err.phone': 'Enter a valid phone number (digits, spaces, +, -, brackets only).',
  'form.err.tooShort': 'Please describe the project in at least {n} characters.',
  'form.err.consent': 'Your consent is required so we can process the request.',

  '404.title': 'Page not found',
  '404.text': 'The page you are looking for does not exist or has been moved.',
};

export const ui: Record<Lang, Record<UiKey, string>> = { bg, en };
