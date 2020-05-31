questions = [
    //Valid questionTypes: customNumber, smallSelection, bigSelection, customText
    {
    "id": 1,
    "question": "How would you classify yourself as?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Authoritarian Left",
        "color": "#990000",
        "effect": "AuthLeft"
        },
        {
        "label": "Authoritarian Right",
        "color": "#003399",
        "effect": "AuthRight"
        },
        {
        "label": "Centrist",
        "color": "#999999",
        "effect": "Centrist"
        },
        {
        "label": "Libertarian Left",
        "color": "#339900",
        "effect": "LibLeft"
        },
        {
        "label": "Libertarian Right",
        "color": "#999900",
        "effect": "LibRight"
        },
        {
        "label": "Unaffiliated / Don't know",
        "color": "#999999",
        "effect": null
        }]
    },
    {
    "id": 2,
    "question": "How would you classify yourself as?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Authoritarian",
        "color": "#6d4cb0",
        "effect": "Auth"
        },
        {
        "label": "Rightist",
        "color": "#4c96af",
        "effect": "Right"
        },
        {
        "label": "Centrist",
        "color": "#999999",
        "effect": "Centrist"
        },
        {
        "label": "Leftist",
        "color": "#af4c4c",
        "effect": "Left"
        },
        {
        "label": "Libertarian",
        "color": "#4caf50",
        "effect": "Lib"
        },
        {
        "label": "Unaffiliated / Don't know",
        "color": "#999999",
        "effect": null
        }]
    },
    {
    "id": 3,
    "question": "How do you view yourself on Culture?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Very Progressive",
        "color": "#1b5e20",
        "effect": 3
        },
        {
        "label": "Progressive",
        "color": "#4caf50",
        "effect": 2
        },
        {
        "label": "Leaning Progressive",
        "color": "#7ae67e",
        "effect": 1
        },
        {
        "label": "Neutral",
        "color": "#a9a9a9",
        "effect": 0
        },
        {
        "label": "Leaning Conservative",
        "color": "#7acbe6",
        "effect": -1
        },
        {
        "label": "Conservative",
        "color": "#4c96af",
        "effect": -2
        },
        {
        "label": "Very Conservative",
        "color": "#1b4e5e",
        "effect": -3
        },
        {
        "label": "Don't Know / Refuse",
        "color": "#a9a9a9",
        "effect": null
        }]
    },
    {
    "id": 4,
    "question": "How do you view yourself on Economics?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Very Right",
        "color": "#5e5e1b",
        "effect": 3
        },
        {
        "label": "Right",
        "color": "#afaf4c",
        "effect": 2
        },
        {
        "label": "Leaning Right",
        "color": "#d1d16d",
        "effect": 1
        },
        {
        "label": "Neutral",
        "color": "#a9a9a9",
        "effect": 0
        },
        {
        "label": "Leaning Left",
        "color": "#e67a7a",
        "effect": -1
        },
        {
        "label": "Left",
        "color": "#af4c4c",
        "effect": -2
        },
        {
        "label": "Very Left",
        "color": "#5e1b1b",
        "effect": -3
        },
        {
        "label": "Don't Know / Refuse",
        "color": "#a9a9a9",
        "effect": null
        }]
    },
    {
    "id": 5,
    "question": "How do you view yourself on Authority?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Very Authoritarian",
        "color": "#321b5e",
        "effect": 3
        },
        {
        "label": "Authoritarian",
        "color": "#6d4cb0",
        "effect": 2
        },
        {
        "label": "Leaning Authoritarian",
        "color": "#9e7ae6",
        "effect": 1
        },
        {
        "label": "Neutral",
        "color": "#a9a9a9",
        "effect": 0
        },
        {
        "label": "Leaning Libertarian",
        "color": "#7ae683",
        "effect": -1
        },
        {
        "label": "Libertarian",
        "color": "#4cb054",
        "effect": -2
        },
        {
        "label": "Very Libertarian",
        "color": "#1b5e21",
        "effect": -3
        },
        {
        "label": "Don't Know / Refuse",
        "color": "#a9a9a9",
        "effect": null
        }]
    },
    {
    "id": 6,
    "question": "What label would you give to your ideology?",
    "questionType": "customText"
    },
    {
    "id": 7,
    "question": "What is your gender?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Male",
        "color": "#003399",
        "effect": "Male"
        },
        {
        "label": "Female",
        "color": "#990000",
        "effect": "Female"
        },
        {
        "label": "Female-to-Male",
        "color": "#7acbe6",
        "effect": "FtM"
        },
        {
        "label": "Male-to-Female",
        "color": "#e67a7a",
        "effect": "FtM"
        },
        {
        "label": "Other",
        "color": "#6d4cb0",
        "effect": "Other"
        },
        {
        "label": "Refuse to Answer",
        "color": "#999999",
        "effect": null
        }]
    },
    {
    "id": 8,
    "question": "How old are you? (13-99)",
    "questionType": "customNumber",
    "range":[13,99]
    },
    {
    "id": 9,
    "question": "Which religion do you adhere to?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Agnostic",
        "color": "#4c96af",
        "effect": "Agnostic"
        },
        {
        "label": "Atheist",
        "color": "#4c96af",
        "effect": "Atheist"
        },
        {
        "label": "Christianity",
        "color": "#afaf4c",
        "effect": "Christian"
        },
        {
        "label": "Islam",
        "color": "#4caf50",
        "effect": "Islam"
        },
        {
        "label": "Buddhism",
        "color": "#afaf4c",
        "effect": "Buddhist"
        },
        {
        "label": "Paganism",
        "color": "#af4c4c",
        "effect": "Pagan"
        },
        {
        "label": "Other",
        "color": "#6d4cb0",
        "effect": "Other"
        },
        {
        "label": "Don't know / Refuse",
        "color": "#999999",
        "effect": null
        }]
    },
    {
    "id": 10,
    "question": "Which region of the world do you live in?",
    "questionType": "bigSelection",
    "answers": {"AF":"Afghanistan","AX":"\u00c5land Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua & Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia & Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","VG":"British Virgin Islands","BN":"Brunei","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cape Verde","BQ":"Caribbean Netherlands","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo - Brazzaville","CD":"Congo - Kinshasa","CK":"Cook Islands","CR":"Costa Rica","CI":"C\u00f4te d\u2019Ivoire","HR":"Croatia","CU":"Cuba","CW":"Cura\u00e7ao","CY":"Cyprus","CZ":"Czechia","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","SZ":"Eswatini","ET":"Ethiopia","FK":"Falkland Islands","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard & McDonald Islands","HN":"Honduras","HK":"Hong Kong SAR China","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Laos","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao SAR China","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia","MD":"Moldova","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar (Burma)","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","KP":"North Korea","MK":"North Macedonia","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territories","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn Islands","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"R\u00e9union","RO":"Romania","RU":"Russia","RW":"Rwanda","WS":"Samoa","SM":"San Marino","ST":"S\u00e3o Tom\u00e9 & Pr\u00edncipe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia & South Sandwich Islands","KR":"South Korea","SS":"South Sudan","ES":"Spain","LK":"Sri Lanka","BL":"St. Barth\u00e9lemy","SH":"St. Helena","KN":"St. Kitts & Nevis","LC":"St. Lucia","MF":"St. Martin","PM":"St. Pierre & Miquelon","VC":"St. Vincent & Grenadines","SD":"Sudan","SR":"Suriname","SJ":"Svalbard & Jan Mayen","SE":"Sweden","CH":"Switzerland","SY":"Syria","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad & Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks & Caicos Islands","TV":"Tuvalu","UM":"U.S. Outlying Islands","VI":"U.S. Virgin Islands","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VA":"Vatican City","VE":"Venezuela","VN":"Vietnam","WF":"Wallis & Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"}
    },
    {
    "id": 11,
    "question": "Do you focus on the sciences/STEM or humanities?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Sciences",
        "color": "#4c96af",
        "effect": 2
        },
        {
        "label": "Leaning Sciences",
        "color": "#7acbe6",
        "effect": 1
        },
        {
        "label": "Both",
        "color": "#a9a9a9",
        "effect": 0
        },
        {
        "label": "Leaning Humanities",
        "color": "#e67a7a",
        "effect": -1
        },
        {
        "label": "Humanities",
        "color": "#af4c4c",
        "effect": -2
        },
        {
        "label": "Don't Know / Refuse",
        "color": "#a9a9a9",
        "effect": null
        }]
    },
    {
    "id": 12,
    "question": "What best describes your status?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Unemployed Student",
        "color": "#4c96af",
        "effect": "Student"
        },
        {
        "label": "Employed Student",
        "color": "#6d4cb0",
        "effect": "StudentWorker"
        },
        {
        "label": "Private Sector Worker",
        "color": "#afaf4c",
        "effect": "Private"
        },
        {
        "label": "Public Sector Worker",
        "color": "#4caf50",
        "effect": "Public"
        },
        {
        "label": "Not in Employment, Education or Training",
        "color": "#af4c4c",
        "effect": "NEET"
        },
        {
        "label": "Refuse to Answer",
        "color": "#999999",
        "effect": null
        }]
    },
    {
    "id": 13,
    "question": "What is your highest level of education?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Primary School or Less",
        "color": "#af4c4c",
        "effect": "Primary"
        },
        {
        "label": "High-School / College",
        "color": "#4c96af",
        "effect": "Middle"
        },
        {
        "label": "Vocational / Trade School",
        "color": "#4caf50",
        "effect": "Trade"
        },
        {
        "label": "Bachelor's degree",
        "color": "#d1d16d",
        "effect": "Bachelor"
        },
        {
        "label": "Master's degree",
        "color": "#afaf4c",
        "effect": "Master"
        },
        {
        "label": "Doctoral degree",
        "color": "#5e5e1b",
        "effect": "Doctor"
        },
        {
        "label": "Refuse to Answer",
        "color": "#999999",
        "effect": null
        }]
    },
    {
    "id": 14,
    "question": "What kind of environment do you live in?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Bigger City",
        "color": "#6d4cb0",
        "effect": "City"
        },
        {
        "label": "Small city or a Town",
        "color": "#4c96af",
        "effect": "Town"
        },
        {
        "label": "Village",
        "color": "#d1d16d",
        "effect": "Village"
        },
        {
        "label": "Isolated (e.g Forest Home)",
        "color": "#4caf50",
        "effect": "Isolated"
        },
        {
        "label": "Refuse to Answer",
        "color": "#999999",
        "effect": null
        }]
    },
    {
    "id": 15,
    "question": "How physically active are you?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "I work out (on a regular basis)",
        "color": "#4caf50",
        "effect": "Regular"
        },
        {
        "label": "I'm active, but don't actively work out",
        "color": "#4c96af",
        "effect": "Occasional"
        },
        {
        "label": "I go outside only out of necessity",
        "color": "#d1d16d",
        "effect": "Rare"
        },
        {
        "label": "Refuse to Answer",
        "color": "#999999",
        "effect": null
        }]
    },
]
