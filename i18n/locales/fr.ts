export default {
    pages: {
        home: "Accueil",
        menu: "Menu",
        reservations: "Réservations",
        privacy: "Confidentialité",
        imprint: "Mentions légales",
        contact: "Contact"
    },
    global: {
        comingSoon: "Bientôt disponible"
    },
    seo: {
        index: {
            title: "Café Prana",
            description:
                "Café Prana à Berlin propose un menu 100 % sans gluten, vegan et biologique dans un espace chaleureux et convivial. Profitez de brunchs nourrissants, de boissons réconfortantes et d’une atmosphère accueillante."
        },
        menu: {
            title: "Menu",
            description:
                "Découvrez le menu sans gluten et vegan du Café Prana, composé de brunchs nourrissants, de déjeuners sains et de boissons réconfortantes à base d’ingrédients biologiques et végétaux."
        },
        imprint: {
            title: "Mentions légales",
            description: "Informations légales du Café Prana."
        },
        privacy: {
            title: "Confidentialité et protection des données",
            description:
                "Découvrez l’engagement du Café Prana envers votre vie privée et la protection de vos données."
        },
        contact: {
            title: "Contactez-nous",
            description: "Contactez Café Prana pour toute question, réservation ou avis."
        },
        reservations: {
            title: "Réservations",
            description:
                "Réservez votre table au Café Prana à Berlin pour une expérience culinaire sans gluten et vegan."
        }
    },
    contact: {
        pageTitle: "Frais, Local et Bienveillant",
        pageDescription:
            "Notre café vegan repose sur l'amour des plantes, la durabilité et la communauté. Contactez-nous — nous serions ravis d'avoir de vos nouvelles.",
        features: {
            email: {
                title: "E-mail",
                description:
                    "Des retours, des demandes d'événements ou des idées de collaboration ? Envoyez-nous un message — nous serions ravis de vous lire."
            },
            phone: {
                title: "Téléphone",
                description:
                    "Des questions ou souhaitez réserver une table ? Appelez-nous rapidement."
            },
            instagram: {
                title: "Instagram",
                description:
                    "Découvrez ce qu'il se prépare aujourd'hui — des bowls colorés aux cappuccinos à l'avoine."
            }
        }
    },
    language: {
        en: "English",
        de: "Deutsch",
        fr: "Français",
        label: "Langue"
    },
    imprint: {
        title: "Mentions légales",

        section: {
            company: {
                title: "Informations selon §5 TMG",
                content: `{name}\n{street}\n{postalCodeCity}\n{country}`
            },
            contact: {
                title: "Contact",
                content: `Téléphone: {phone}\nE-mail: {email}\nSite web: {website}`,
                phoneLabel: "Téléphone",
                emailLabel: "E-mail",
                websiteLabel: "Site web"
            },
            supervisory: {
                title: "Autorité de surveillance",
                content: `Autorité de surveillance compétente (le cas échéant):\n{authority}`
            },
            liability: {
                title: "Responsabilité pour le contenu",
                content: `En tant que prestataires de services, nous sommes responsables de notre propre contenu sur ces pages conformément au §7(1) TMG et aux lois générales. Toutefois, selon §§8-10 TMG, nous ne sommes pas tenus de surveiller les informations externes transmises ou stockées, ni de rechercher des circonstances indiquant une activité illégale.\n\nLes obligations de supprimer ou de bloquer l’utilisation d’informations en vertu des lois générales restent inchangées. Une responsabilité n’est possible qu’à partir du moment où nous prenons connaissance d’une violation concrète. Dès la notification de telles violations, nous supprimerons immédiatement ces contenus.`
            },
            links: {
                title: "Responsabilité pour les liens",
                content: `Notre site contient des liens vers des sites web externes tiers, dont nous ne contrôlons pas le contenu. Nous ne pouvons donc assumer aucune responsabilité pour ces contenus externes. Le fournisseur ou l’exploitant des pages liées est toujours responsable de leur contenu.\n\nLes pages liées ont été vérifiées pour d’éventuelles violations de la loi au moment de la création du lien. Aucun contenu illégal n’a été identifié à ce moment-là. Une surveillance permanente des pages liées n’est pas raisonnable sans indication concrète d’une violation. Dès que nous aurons connaissance d’une telle violation, nous retirerons immédiatement ces liens.`
            },
            copyright: {
                title: "Droits d’auteur",
                content: `Les contenus et œuvres créés par les exploitants de ce site sont soumis à la législation allemande sur le droit d’auteur. Toute duplication, traitement, distribution ou exploitation en dehors des limites du droit d’auteur nécessite l'accord écrit de l’auteur ou du créateur.\n\nLes téléchargements et copies de ce site ne sont autorisés que pour un usage privé et non commercial. Dans la mesure où certains contenus n’ont pas été créés par l’exploitant, les droits d’auteur de tiers sont respectés et ces contenus sont identifiés comme tels.\n\nSi vous constatez malgré tout une violation du droit d’auteur, veuillez nous en informer. Dès notification, nous supprimerons immédiatement ces contenus.`
            },
            dispute: {
                title: "Résolution des litiges dans l’UE / Médiation",
                content: `La Commission européenne met à disposition une plateforme de résolution en ligne des litiges (RLL): https://ec.europa.eu/consumers/odr\n\nNotre adresse e-mail figure ci-dessus dans les mentions légales.\n\nNous ne sommes ni disposés ni obligés à participer à une procédure de médiation devant un organisme de règlement des litiges pour consommateurs.`
            }
        }
    },
    privacy: {
        title: "Confidentialité et protection des données",
        description:
            "Nous prenons votre vie privée au sérieux. Cette page explique quelles données nous collectons, pourquoi et quels sont vos droits.",
        lastUpdated: "Dernière mise à jour: {date}",
        section: {
            controller: {
                title: "Responsable du traitement",
                content: `{name}\n{street}\n{postalCodeCity}\n{country}\n\nPour toute question concernant le traitement des données, contactez: {email}`
            },
            dataCollected: {
                title: "Données que nous collectons",
                content: `Nous pouvons collecter des données personnelles que vous fournissez directement (par exemple lors d’un contact), des données techniques (informations sur l’appareil et le navigateur), et des données d’utilisation (pages visitées, interactions). Ceci nous aide à faire fonctionner et améliorer le site.`
            },
            legalBasis: {
                title: "Base légale du traitement",
                content: `Nous traitons les données personnelles lorsque cela est nécessaire pour fournir nos services, respecter des obligations légales, protéger nos intérêts légitimes (par exemple sécurité ou prévention des fraudes), ou avec votre consentement lorsque requis (par exemple pour les cookies et l’analyse).`
            },
            cookies: {
                title: "Cookies",
                content: `Nous utilisons des cookies et technologies similaires uniquement pour assurer le fonctionnement essentiel du site. Les cookies essentiels sont nécessaires pour que le site fonctionne.`
            },
            retention: {
                title: "Durée de conservation",
                content: `Nous conservons les données personnelles uniquement le temps nécessaire aux finalités décrites et pour respecter les obligations légales. Lorsque les données ne sont plus nécessaires, elles sont supprimées ou anonymisées.`
            },
            security: {
                title: "Sécurité",
                content: `Nous prenons des mesures techniques et organisationnelles raisonnables pour protéger les données personnelles contre la destruction accidentelle ou illicite, la perte, l’altération, la divulgation non autorisée ou l’accès non autorisé.`
            },
            rights: {
                title: "Vos droits",
                content: `Selon le RGPD, vous disposez de droits tels que l’accès, la rectification, l’effacement, la limitation du traitement, la portabilité des données et l’opposition. Pour exercer ces droits, contactez-nous à {email}.`
            },
            contact: {
                title: "Contact",
                content: `Pour toute question liée à la confidentialité: {email}\nVous pouvez également utiliser les informations de contact figurant dans les mentions légales.`
            },
            dispute: {
                title: "Résolution des litiges UE",
                content: `La plateforme RLL de la Commission européenne est disponible ici: https://ec.europa.eu/consumers/odr`
            }
        }
    },
    index: {
        hero: {
            title: "Bienvenue au Café Prana",
            description: "Un havre sans gluten et vegan au cœur de Berlin",
            headline: "Nouvellement ouvert!",
            links: {
                menuHighlights: "Aperçu du menu",
                getDirections: "Itinéraire"
            }
        },
        philosophy: {
            title: "Notre philosophie",
            description:
                "Nous croyons en une alimentation nourrissante qui réjouit vos papilles et soutient votre corps. Voici ce qui rend Café Prana unique:"
        },
        features: {
            glutenFree: {
                title: "100 % sans gluten",
                description:
                    "Tout notre menu est sans gluten, sûr pour les personnes coeliaques ou sensibles."
            },
            plantBased: {
                title: "Végétal et biologique",
                description:
                    "Nous utilisons des ingrédients végétaux et biologiques, issus de sources locales autant que possible."
            },
            bowls: {
                title: "Déjeuner et brunch nourrissants",
                description:
                    "Nos plats faits maison sont conçus pour nourrir votre corps grâce à une grande variété de macro et micronutriments."
            },
            community: {
                title: "Espace convivial",
                description:
                    "Vivez une atmosphère chaleureuse pour vous détendre, travailler ou retrouver vos amis."
            },
            drinks: {
                title: "Boissons réconfortantes",
                description:
                    "Que vous choisissiez un latte au lait de cajou fait maison ou une boisson chaude de saison, votre cœur et votre esprit vous remercieront."
            },
            experience: {
                title: "Expérience immersive",
                description:
                    "Chez Prana, divers espaces apparaîtront pour vous permettre de vous exprimer. Les ateliers sont les bienvenus!"
            }
        },
        menu: {
            title: "Aperçu du menu",
            description:
                "Voici quelques-uns de nos plats et boissons préférés disponibles chaque jour.",
            items: {
                waffle: {
                    title: "Gaufre salée",
                    description: "Gaufre à la patate douce avec les garnitures salées du jour."
                },
                chai: {
                    title: "Chai Latte",
                    description:
                        "Un mélange d’épices chai fait maison, servi avec le lait végétal de votre choix."
                },
                bananaBread: {
                    title: "Banana Bread Prana",
                    description:
                        "Banana bread très nourrissant et naturellement sucré, servi avec des garnitures saisonnières comme du beurre de noix ou une compote."
                },
                cacao: {
                    title: "Cacao cérémoniel",
                    description:
                        "Nous croyons en la pleine conscience et au pouvoir du cacao pur et cru pour élever l’esprit."
                }
            },
            cta: {
                main: {
                    label: "Découvrir le menu complet"
                },
                secondary: {
                    label: "Réserver une table"
                }
            }
        },
        gallery: {
            title: "Galerie",
            description:
                "Un aperçu de l’ambiance, des plats et des boissons qui reflètent la philosophie du Café Prana."
        },
        story: {
            title: "Mon histoire",
            description:
                "Fondé par une yogini, nutritionniste, gourmande, amoureuse de la nature, coach sportive, cuisinière santé et barista (…vous voyez le personnage…) souhaitant réunir les aspects holistiques de la santé et de l’énergie sous un même toit. Café Prana est une aventure solo qui combine une atmosphère accueillante avec des produits de haute qualité. Des légumes régionaux et saisonniers rencontrent des pseudocéréales nutritives et des superaliments naturels, sublimés par la créativité de la fée de la cuisine. Que vous preniez un café de spécialité à emporter ou que vous vous installiez confortablement pour un brunch, un espace sûr et ouvert vous attend. L’objectif à long terme de Prana est d’adopter des pratiques encore plus durables et de favoriser un sentiment de communauté et de respect profond."
        },
        testimonials: {
            title: "Ce que disent nos invités",
            description:
                "Ne nous croyez pas sur parole, écoutez celles et ceux qui adorent Café Prana.",
            cta: {
                label: "Voir plus d’avis"
            }
        },
        faq: {
            title: "Questions fréquentes",
            description: "Une question? Voici nos réponses.",
            items: {
                glutenFree: {
                    question: "Tout le menu est-il sans gluten?",
                    answer: "Oui! Nous sommes entièrement sans gluten. Tous nos plats sont préparés sans gluten pour que vous puissiez manger en toute tranquillité."
                },
                reservations: {
                    question: "Prenez-vous des réservations?",
                    answer: "Pour le moment, nous acceptons les réservations uniquement via Instagram ou e-mail. Passez quand même nous voir, il y a généralement de la place!"
                },
                pets: {
                    question: "Les animaux sont-ils autorisés?",
                    answer: "Nous n’autorisons actuellement pas les animaux à l’intérieur afin d’assurer le confort et la sécurité de tous nos invités, y compris ceux souffrant d’allergies ou de peurs. De plus, notre espace partagé et notre cuisine ouverte ne sont pas compatibles avec les animaux pour des raisons d’hygiène. Merci de votre compréhension!"
                },
                takeaway: {
                    question: "Proposez-vous de la vente à emporter?",
                    answer: "Oui, nous proposons la vente à emporter pour la plupart de nos plats. Venez nous voir et demandez des détails à notre équipe."
                }
            }
        },
        cta: {
            title: "Venez goûter la différence",
            description:
                "Visitez Café Prana aujourd’hui et découvrez votre nouveau lieu préféré. Nous sommes ouverts du mardi au dimanche pour le café, le petit-déjeuner, le brunch et le déjeuner.",
            hours: {
                heading: "Horaires d’ouverture",
                monday: {day: "Lundi", time: "Fermé"},
                tuesday: {day: "Mardi", time: "07:00 - 15:00"},
                wednesday: {day: "Mercredi", time: "07:00 - 15:00"},
                thursday: {day: "Jeudi", time: "07:00 - 15:00"},
                friday: {day: "Vendredi", time: "07:00 - 15:00"},
                saturday: {day: "Samedi", time: "09:00 - 17:00"},
                sunday: {day: "Dimanche", time: "09:00 - 17:00"}
            },
            links: {
                getDirections: "Itinéraire",
                reservations: "Réservations"
            }
        }
    },
    menu: {
        deals: {
            title: "Offres Prana",
            options: "Le bonheur n’est réel que lorsqu’il est partagé!",
            items: {
                coworking: {
                    title: "Jours de co-working",
                    desc: "Du mardi au vendredi jusqu’à 12h – 3 heures par table, café et thé offerts.",
                    ingredients: "Comprend: Wi-Fi, café, thé, prise électrique"
                },
                businessBreak: {
                    title: "Business Break",
                    desc: "Besoin d’un lieu chaleureux pour un tête-à-tête? Profitez de 2 cafés, 2 dattes et du WI-FI.",
                    ingredients:
                        "Comprend: 2 cafés (espresso, americano, cappuccino, etc), 2 pralines de dattes"
                },
                businessLunch: {
                    title: "Business Lunch",
                    desc: "2 boissons pétillantes sans alcool, des déjeuners sains et des expressos pour booster votre productivité.",
                    ingredients: "Comprend: entrées, 2 déjeuners, 2 expressos et 2 shots de menthe"
                },
                tastyDate: {
                    title: "Tasty Date",
                    desc: "Profitez d’un moment à deux avec des boissons chaudes et de petites douceurs.",
                    ingredients:
                        "Comprend: 2 boissons, 2 pralines de dattes et une tranche de banana bread avec garnitures"
                }
            }
        },
        drinksCoffee: {
            title: "Cafés spéciaux",
            options:
                "Choisissez votre lait préféré: mélange avoine-amande, avoine-coco, lait de cajou-coco maison, soja, amande",
            items: {
                haselnussLatte: {
                    title: "Latte noisette",
                    desc: "Gourmand, riche et réconfortant.",
                    ingredients:
                        "Double espresso, huile de noisette torréfiée, lait végétal au choix"
                },
                dirtyEarl: {
                    title: "Dirty Earl",
                    desc: "Un mélange sophistiqué de thé noir et de café.",
                    ingredients: "Thé Earl Grey, un espresso, lait végétal au choix"
                },
                espresso: {
                    title: "Espresso / Americano biologique et équitable",
                    desc: "Espresso classique ou lungo extrait de notre mélange spécial.",
                    ingredients: "Mélange faible en acidité, extraction courte"
                },
                flatWhite: {
                    title: "Flat White",
                    desc: "Onctueux et intense avec le lait végétal de votre choix.",
                    ingredients: "Espresso, micro-mousse veloutée, lait végétal"
                },
                latte: {
                    title: "Café au lait",
                    desc: "Café doux et crémeux avec lait végétal.",
                    ingredients: "Lungo simple ou double avec lait végétal moussé"
                }
            }
        },
        drinksHot: {
            title: "Boissons chaudes",
            options:
                "Choisissez votre lait préféré: mélange avoine-amande, avoine-coco, lait cajou-coco maison, soja, riz-coco, noisette, amande",
            items: {
                sunshineMilk: {
                    title: "Sunshine Milk",
                    desc: "Lait doré aux épices avec huile MCT.",
                    ingredients: "Mélange d’épices dorées, huile MCT, lait végétal au choix"
                },
                chaiLatte: {
                    title: "Chai Latte",
                    desc: "Mélange d’épices chai fait maison avec lait végétal au choix",
                    ingredients: "Épices chai, lait végétal"
                },
                matcha: {
                    title: "Matcha cérémoniel",
                    desc: "Matcha de première qualité servi chaud.",
                    ingredients: "Poudre de matcha avec eau chaude"
                },
                matchaLatte: {
                    title: "Matcha Latte",
                    desc: "Matcha de première qualité avec lait végétal et shot optionnel.",
                    ingredients: "Poudre de matcha, lait chauffé"
                },
                hotChocolate: {
                    title: "Chocolat chaud fondu",
                    desc: "Chocolat fondu sucré à la datte avec lait végétal.",
                    ingredients: "Chocolat à la datte, lait végétal"
                },
                cacao: {
                    title: "Cacao cérémoniel",
                    desc: "Nous croyons en la pleine conscience et au pouvoir du cacao pur et cru pour élever votre esprit.",
                    ingredients: "Cacao cru, eau chaude ou lait végétal"
                }
            }
        },
        food: {
            title: "Plats et brunch",
            options: "Les garnitures du jour sont sélectionnées avec soin pour se compléter.",
            items: {
                porridge: {
                    title: "Porridge",
                    desc: "Servi chaud, pur ou avec garnitures saisonnières.",
                    ingredients:
                        "Porridge d’avoine et de souchet préparé avec lait de coco, garnitures en option"
                },
                bananaBread: {
                    title: "Banana Bread",
                    desc: "Grillé et servi avec les garnitures du jour.",
                    ingredients: "Mélange de farines sans gluten, banane, amandes"
                },
                waffle: {
                    title: "Gaufres",
                    desc: "À la carte ou suggestion du jour: sucrées ou salées.",
                    ingredients:
                        "Farine d’avoine sans gluten, patate douce et amandes, garnitures du jour"
                },
                brunch: {
                    title: "Pranas Brunch",
                    desc: "Un brunch sain et gourmand avec une touche gastronomique.",
                    ingredients:
                        'Salade "œuf" à base de tofu, dips, bacon de carotte, pain sans gluten maison, soupe ou dessert'
                },
                lunch: {
                    title: "Pranas Lunch",
                    desc: "Un déjeuner équilibré et nourrissant pour votre après-midi.",
                    ingredients:
                        "Nos déjeuners varient selon la saison et la disponibilité des ingrédients frais."
                },
                soup: {
                    title: "Soupe du jour",
                    desc: "Soupe réconfortante avec garnitures.",
                    ingredients: "Légumes de saison, épices et herbes"
                }
            }
        }
    },
    reservations: {
        title: "Planifiez votre visite au Café Prana",
        description:
            "Que vous planifiiez un moment spécial, une réunion décontractée ou un rendez-vous tranquille, réserver votre table nous aide à préparer un cadre confortable rien que pour vous.",
        features: {
            request: {
                title: "Demander une table",
                description:
                    "Choisissez la date, l'heure et le nombre de personnes pour demander une réservation. Nous essayons de répondre à toutes les demandes."
            },
            confirmation: {
                title: "Confirmation sous 24 heures",
                description:
                    "Les réservations sont confirmées sous 24 heures. Merci de prévoir jusqu'à un jour pour la confirmation finale."
            },
            email: {
                title: "Confirmation par e-mail",
                description:
                    "Vous recevrez un e-mail pour confirmer la réservation avec tous les détails et éventuelles instructions complémentaires."
            },
            special: {
                title: "Demandes spéciales & allergies",
                description:
                    "Utilisez le champ message pour nous informer d'allergies, de besoins d'accessibilité ou d'autres demandes particulières."
            },
            changes: {
                title: "Modifications & annulation",
                description:
                    "Besoin de modifier ou d'annuler ? Merci de nous en informer dès que possible afin que nous puissions libérer la table pour d'autres clients."
            }
        },
        form: {
            fields: {
                firstName: {label: "Prénom", placeholder: "Prénom"},
                lastName: {label: "Nom de famille", placeholder: "Nom de famille"},
                email: {label: "E-mail", placeholder: ""},
                phone: {
                    label: "Numéro de téléphone (avec indicatif)",
                    placeholder: "+49 345 678 9012"
                },
                date: {label: "Date de réservation"},
                time: {label: "Heure de réservation"},
                guests: {label: "Nombre d'invités"},
                message: {label: "Message (optionnel)"},
                privacy: {
                    linkText: "Politique de confidentialité",
                    preLink: "J'ai lu et j'accepte la ",
                    postLink:
                        " Il est convenu que les données fournies volontairement peuvent être stockées et utilisées pour vous contacter. Le traitement peut être révoqué à tout moment."
                }
            },
            submit: "Envoyer",
            modal: {
                title: "Demande de réservation reçue",
                body: {
                    p1: "Merci ! Nous avons bien reçu votre demande de réservation.",
                    p2_pre: "Nous vérifions la disponibilité et vous enverrons un e-mail de confirmation dans les 24 heures. Si vous ne recevez pas de confirmation, vérifiez votre dossier spam ou",
                    p2_link: "contactez-nous",
                    p2_post: "."
                },
                closeButton: "D'accord"
            },
            errors: {
                firstName: {required: "Le prénom est requis"},
                lastName: {required: "Le nom de famille est requis"},
                email: {
                    required: "L'e-mail est requis",
                    invalid: "Veuillez fournir une adresse e-mail valide"
                },
                phone: {invalid: "Veuillez fournir un numéro de téléphone valide avec l'indicatif"},
                guests: {min: "Au moins 1 invité est requis", max: "Maximum 20 invités autorisés"},
                date: {invalid: "Veuillez fournir une date valide (aujourd'hui ou ultérieure)"},
                time: {invalid: "La valeur doit être une heure valide entre 07:00 et 16:00"},
                privacy: {
                    required:
                        "Veuillez confirmer la politique de confidentialité et consentir à être contacté."
                }
            },
            toasts: {
                validationTitle: "Erreur de formulaire",
                successTitle: "Réservation envoyée avec succès",
                successDescription:
                    "Nous vous répondrons dès que nous aurons traité votre demande.",
                sendErrorTitle: "Erreur lors de l'envoi",
                sendErrorDescription: "Veuillez réessayer plus tard."
            }
        }
    }
};
