export default {
    pages: {
        home: "Home",
        menu: "Menu",
        reservations: "Reservations",
        privacy: "Privacy",
        imprint: "Imprint",
        contact: "Contact"
    },
    global: {
        comingSoon: "Soon"
    },
    language: {
        en: "English",
        de: "German",
        label: "Language"
    },
    imprint: {
        title: "Imprint",

        section: {
            company: {
                title: "Information according to §5 TMG",
                content: `{name}\n{street}\n{postalCodeCity}\n{country}\n\nRepresented by:\n{representative}`
            },
            contact: {
                title: "Contact",
                content: `Phone: {phone}\nEmail: {email}\nWebsite: {website}`,
                phoneLabel: "Phone",
                emailLabel: "Email",
                websiteLabel: "Website"
            },
            vat: {
                title: "VAT ID",
                content: `VAT Identification Number according to §27a German VAT Act:\n{vatId}\n\n(If not applicable: remove or state "Not subject to VAT.")`
            },
            supervisory: {
                title: "Supervisory Authority",
                content: `Responsible supervisory authority (if applicable):\n{authority}`
            },
            liability: {
                title: "Liability for Content",
                content: `As a service provider, we are responsible for our own content on these pages according to §7(1) TMG and general laws. However, according to §§8-10 TMG, we are not obliged to monitor transmitted or stored external information or investigate circumstances that indicate illegal activity.\n\nObligations to remove or block the use of information under general laws remain unaffected. Liability in this respect is only possible from the time we become aware of a specific infringement. Upon notification of such violations, we will remove these contents immediately.`
            },
            links: {
                title: "Liability for Links",
                content: `Our website contains links to external websites of third parties, the contents of which we have no control over. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the linked pages is always responsible for the content of the pages.\n\nThe linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at that time. Permanent monitoring of the linked pages is not reasonable without specific evidence of a violation. Upon becoming aware of any such violations, we will remove these links immediately.`
            },
            copyright: {
                title: "Copyright",
                content: `The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.\n\nDownloads and copies of this site are only permitted for private, non-commercial use. Insofar as content on this site was not created by the operator, the copyrights of third parties are respected and such content is marked accordingly.\n\nShould you nevertheless become aware of a copyright infringement, please inform us. Upon notification, we will remove such content immediately.`
            },
            dispute: {
                title: "EU Dispute Resolution / Consumer Mediation",
                content: `The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr\n\nOur email address can be found above in the imprint.\n\nWe are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.`
            }
        }
    },
    privacy: {
        title: "Privacy & Data Protection",
        description:
            "We take your privacy seriously. This page explains what data we collect, why, and what rights you have.",
        lastUpdated: "Last updated: {date}",
        section: {
            controller: {
                title: "Data Controller",
                content: `{name}\n{street}\n{postalCodeCity}\n{country}\n\nRepresented by:\n{representative}\n\nIf you have questions regarding data processing, contact: {email}`
            },
            dataCollected: {
                title: "What Data We Collect",
                content: `We may collect personal data that you provide directly (for example, when contacting us), technical data (device and browser information), and usage data (pages visited, interactions). This helps us operate and improve the website.`
            },
            legalBasis: {
                title: "Legal Basis for Processing",
                content: `We process personal data when necessary to provide our services, comply with legal obligations, protect legitimate interests (e.g., security, fraud prevention), and with your consent where required (e.g., for cookies and analytics).`
            },
            cookies: {
                title: "Cookies",
                content: `We use cookies and similar technologies only to provide core site functionality Essential cookies are necessary for the site to function.`
            },
            retention: {
                title: "Data Retention",
                content: `We retain personal data only as long as necessary for the purposes described and to comply with legal obligations. When data is no longer needed, it will be deleted or anonymized.`
            },
            security: {
                title: "Security",
                content: `We take reasonable technical and organizational measures to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure or access.`
            },
            rights: {
                title: "Your Rights",
                content: `Under GDPR you have rights including access, rectification, erasure, restriction of processing, data portability and objection. To exercise these rights, contact us at {email}.`
            },
            contact: {
                title: "Contact",
                content: `For privacy inquiries contact: {email}\nYou can also use our imprint contact details for legal notices.`
            },
            dispute: {
                title: "EU Dispute Resolution",
                content: `The European Commission's ODR platform is available here: https://ec.europa.eu/consumers/odr`
            }
        }
    },
    index: {
        hero: {
            title: "Welcome to Prana Café",
            description: "A gluten‑free and vegan haven in the heart of Berlin",
            headline: "Newly opened!",
            links: {
                ourPhilosophy: "Our Philosophy",
                menuHighlights: "Menu Highlights"
            }
        },
        philosophy: {
            title: "Our Philosophy",
            description:
                "We believe in nourishing food that delights your taste buds and fuels your body. Here’s what makes Prana Café special:"
        },
        features: {
            glutenFree: {
                title: "100  %  Gluten‑Free",
                description:
                    "Everything on our menu is gluten‑free, safe for coeliacs and those with sensitivities."
            },
            plantBased: {
                title: "Plant‑Based  &  Organic",
                description:
                    "We use plant‑based, organic ingredients sourced locally whenever possible."
            },
            bowls: {
                title: "Nourishing Bowls  &  Smoothies",
                description:
                    "From açaí bowls to power smoothies, our dishes fuel your body and mind."
            },
            community: {
                title: "Cozy Community Space",
                description:
                    "Experience a warm atmosphere where you can relax, work or catch up with friends."
            }
        },
        menu: {
            title: "Menu Highlights",
            description: "Here are a few of our favourite dishes and drinks you can enjoy today.",
            items: {
                avocado: {
                    title: "Avocado Toast Supreme",
                    description:
                        "Toasted gluten‑free sourdough topped with smashed avocado, chilli flakes, hemp seeds and microgreens."
                },
                rainbow: {
                    title: "Rainbow Power Bowl",
                    description:
                        "A colourful bowl of quinoa, roasted veggies, pickled beets, and a creamy tahini dressing."
                },
                turmericLatte: {
                    title: "Golden Turmeric Latte",
                    description:
                        "Creamy oat milk blended with turmeric, ginger, cinnamon and a hint of maple, served warm or iced."
                },
                berry: {
                    title: "Berry Bliss Smoothie",
                    description:
                        "A vibrant blend of mixed berries, banana, coconut milk and a touch of agave."
                },
                chickpeaWrap: {
                    title: "Chickpea Salad Wrap",
                    description:
                        "Crunchy vegetables and smashed chickpeas wrapped in a gluten‑free tortilla with lemon‑dill sauce."
                },
                matcha: {
                    title: "Matcha Magic Bowl",
                    description:
                        "Smooth matcha smoothie bowl topped with coconut flakes, granola and seasonal fruit."
                }
            },
            cta: {
                label: "View our menu"
            }
        },
        gallery: {
            title: "Gallery",
            description:
                "Get a glimpse of the ambience, dishes and drinks that make Prana Café special."
        },
        story: {
            title: "Our Story",
            description:
                "Learn how Prana Café was born out of a passion for holistic health and community.",
            paragraph1:
                "Founded by friends who wanted to share their love of wholesome food, Prana  Café brings together locally‑sourced ingredients and creative recipes. We’re committed to sustainability, compassion and a welcoming community. Whether you’re grabbing coffee on the go or settling in for brunch, we’ve created a space where everyone feels at home.",
            paragraph2:
                "Drop by to experience colourful bowls, seasonal specials and our signature drinks crafted with superfoods and adaptogens. Every item on our menu is 100  %  gluten‑free and vegan, so you can eat with confidence and delight."
        },
        testimonials: {
            title: "What Our Guests Say",
            description: "Don’t just take our word for it—hear from people who love Prana  Café.",
            anna: {
                quote: "Best vegan brunch in Berlin! I can always find something new and exciting on the menu."
            },
            markus: {
                quote: "As someone with coeliac disease, I love that I don’t have to worry about gluten here—everything is delicious and safe."
            },
            sophie: {
                quote: "The atmosphere at Prana is so relaxing and welcoming. My go‑to spot for an afternoon latte and a catch‑up with friends."
            }
        },
        faq: {
            title: "Frequently Asked Questions",
            description: "Have a question? We’ve got answers.",
            items: {
                glutenFree: {
                    question: "Is everything on the menu gluten‑free?",
                    answer: "Yes! We are entirely gluten‑free. All of our dishes are prepared without gluten so you can enjoy your meal worry‑free."
                },
                reservations: {
                    question: "Do you take reservations?",
                    answer: "At the moment we operate on a first‑come, first‑served basis. Feel free to drop by—there’s usually a seat waiting for you!"
                },
                pets: {
                    question: "Are pets allowed?",
                    answer: "Absolutely! Well‑behaved pets are welcome in our outdoor seating area."
                },
                takeaway: {
                    question: "Do you offer take‑away?",
                    answer: "Yes, we offer take‑away for most of our menu items. Stop by and ask our staff for details."
                }
            }
        },
        cta: {
            title: "Come taste the difference",
            description:
                "Visit Prana  Café today and discover your new favourite spot. We’re open daily for coffee, breakfast, brunch and lunch.",
            links: {
                getDirections: "Get Directions",
                seeMore: "Reservations"
            }
        }
    },
    menu: {
        deals: {
            title: "Prana Deals",
            items: {
                coworking: {
                    title: "Co-working Days",
                    desc: "Tuesday to Friday – back space only, 3 hours per table, includes free coffee & tea.",
                    ingredients: "Includes: Wi‑Fi access, coffee, tea, power outlet"
                },
                businessBreak: {
                    title: "Business Break",
                    desc: "2 coffees, 2 dates, computer use for 1 hour (not 12–14).",
                    ingredients: "Includes: 2 coffees, 2 dates, small snack"
                },
                businessLunch: {
                    title: "Business Lunch",
                    desc: "2 sober bubbles, olives, 2 lunches, 2 espressos & 2 mint shots.",
                    ingredients: "Menu: 2x main, side, dessert"
                },
                tastyDate: {
                    title: "Tasty Date",
                    desc: "2 drinks, 2 dates & a slice of banana bread with toppings to share.",
                    ingredients: "Includes: 2 drinks, banana bread slice, shared toppings"
                }
            }
        },
        drinksCoffee: {
            title: "Coffee Specials",
            items: {
                espresso: {
                    title: "Espresso / Americano",
                    desc: "Classic espresso or lungo.",
                    ingredients: "100% Arabica, short pull"
                },
                flatWhite: {
                    title: "Flat White",
                    desc: "Smooth and rich with plant milk of your choice.",
                    ingredients: "Espresso, velvety microfoam, plant milk"
                },
                latte: {
                    title: "Latte",
                    desc: "Creamy, mild coffee with milk.",
                    ingredients: "Espresso, steamed milk, soft crema"
                },
                haselnussLatte: {
                    title: "Hazelnut Latte",
                    desc: "Nutty, warming and sweet.",
                    ingredients: "Espresso, hazelnut syrup, frothed milk"
                }
            }
        },
        drinksHot: {
            title: "Hot Drinks",
            items: {
                sunshineMilk: {
                    title: "Sunshine Milk",
                    desc: "Golden milk spice with MCT oil.",
                    ingredients: "Turmeric, ginger, MCT oil, oat milk"
                },
                chaiLatte: {
                    title: "Chai Latte",
                    desc: "House-made chai with Earl Grey, cacao, or golden blend.",
                    ingredients: "Spiced tea, cinnamon, cardamom, oat milk"
                },
                matchaLatte: {
                    title: "Ceremonial Matcha Latte",
                    desc: "High-grade matcha with optional extra shot.",
                    ingredients: "Matcha powder, hot water, steamed milk"
                },
                hotChocolate: {
                    title: "Melted Hot Chocolate",
                    desc: "Date-sweetened plant-based chocolate drink.",
                    ingredients: "Dark chocolate, date syrup, oat milk"
                }
            }
        },
        food: {
            title: "Food & Brunch",
            items: {
                porridge: {
                    title: "Oat-Almond Porridge",
                    desc: "Served warm with seasonal toppings.",
                    ingredients: "Oats, almond milk, seasonal fruit, nuts"
                },
                bananaBread: {
                    title: "Banana Bread",
                    desc: "With your choice of toppings – customer favorite.",
                    ingredients: "Ripe bananas, gluten-free flour, nuts"
                },
                waffle: {
                    title: "Sweet Waffles",
                    desc: "Made with oat flour and nut butter, gluten-free and unsweetened.",
                    ingredients: "Oat flour, plant oil, maple syrup topping"
                },
                brunch: {
                    title: "Vegan Brunch",
                    desc: "Egg-free salad, dips, salad, gluten-free bread & small soup or dessert.",
                    ingredients: "Selection: dip, salad, gluten-free bread, soup"
                }
            }
        }
    }
};
