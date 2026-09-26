var app = angular.module("dhyeyApp", []);

app.controller("MainController", function($scope) {

    /* =========================================
       BASIC
    ========================================= */

    $scope.currentYear = new Date().getFullYear();

    $scope.history = [];

    $scope.form = {
        name: "",
        phone: "",
        requirement: "",
        message: ""
    };


    /* =========================================
       SERVICES
    ========================================= */

    $scope.services = [

        {
            id: "income-tax",
            number: "01",
            icon: "₹",
            category: "TAXATION",
            name: "Income Tax",
            short: "ITR, documentation & tax support",
            description: "Structured support for individual and business income-tax requirements.",
            longDescription:
                "Explore income-tax related work areas including return preparation support, documentation, information review and general tax-related assistance.",
            tags: ["ITR", "Documents", "Tax Support"],

            topics: [

                {
                    number: "01",
                    id: "itr",
                    title: "ITR Filing",
                    description: "Understand the return preparation and filing support route.",
                    fullDescription:
                        "Income Tax Return work can involve collecting information, reviewing documents, organising income and deduction details and preparing the applicable return.",
                    sections: [
                        {
                            number: "01",
                            title: "What this can involve",
                            paragraphs: [
                                "The exact requirements depend on the individual's income sources, documents and applicable return requirements.",
                                "The consultancy can help organise the information required for the return process."
                            ],
                            items: [
                                "Income information",
                                "Tax-related documents",
                                "Deduction information",
                                "Review of available records",
                                "Return preparation support"
                            ]
                        },
                        {
                            number: "02",
                            title: "Typical process",
                            paragraphs: [
                                "Information is collected first. The available records can then be reviewed and organised before the applicable return process is completed."
                            ],
                            items: [
                                "Requirement discussion",
                                "Document collection",
                                "Information review",
                                "Return preparation",
                                "Completion / follow-up"
                            ]
                        }
                    ]
                },

                {
                    number: "02",
                    id: "tax-documents",
                    title: "Tax Documentation",
                    description: "Organise the information and documents needed for tax work.",
                    fullDescription:
                        "Proper documentation makes tax-related work easier to review and organise.",
                    sections: [
                        {
                            number: "01",
                            title: "Common information areas",
                            paragraphs: [
                                "The required documents vary according to the taxpayer's situation."
                            ],
                            items: [
                                "Income records",
                                "Bank information",
                                "Investment information",
                                "Deduction records",
                                "Previous tax records where relevant"
                            ]
                        },
                        {
                            number: "02",
                            title: "Why organisation matters",
                            paragraphs: [
                                "A structured document set helps reduce confusion during the preparation and review process."
                            ],
                            items: [
                                "Easy reference",
                                "Better record keeping",
                                "Faster information review"
                            ]
                        }
                    ]
                },

                {
                    number: "03",
                    id: "tax-consultation",
                    title: "Tax Consultation",
                    description: "Discuss a tax-related question or requirement.",
                    fullDescription:
                        "Tax situations can differ significantly. A consultation provides an opportunity to explain the specific requirement and understand what information may be needed.",
                    sections: [
                        {
                            number: "01",
                            title: "Discussion",
                            paragraphs: [
                                "The first step is to understand the situation, income sources and specific question."
                            ],
                            items: [
                                "Explain your situation",
                                "Share available documents",
                                "Identify the requirement",
                                "Discuss the next step"
                            ]
                        }
                    ]
                },

                {
                    number: "04",
                    id: "tax-faq",
                    title: "Tax FAQs",
                    description: "Explore common questions before contacting the desk.",
                    fullDescription:
                        "A general overview of frequently asked tax-related questions.",
                    sections: [
                        {
                            number: "01",
                            title: "General point",
                            paragraphs: [
                                "Tax requirements depend on individual facts and the applicable rules at the relevant time.",
                                "For a specific situation, contact the consultancy with the relevant details."
                            ],
                            items: [
                                "Requirements can differ by taxpayer",
                                "Documents should be kept properly",
                                "Current rules should be checked for specific matters"
                            ]
                        }
                    ]
                }

            ],

            related: ["gst", "tds", "accounting"]
        },


        {
            id: "gst",
            number: "02",
            icon: "G",
            category: "INDIRECT TAX",
            name: "GST",
            short: "Registration, returns & records",
            description: "Support around GST registration, records, returns and compliance.",
            longDescription:
                "Explore GST-related requirements including registration support, return-related work, records and compliance documentation.",
            tags: ["Registration", "Returns", "Records"],

            topics: [

                {
                    number: "01",
                    id: "gst-registration",
                    title: "GST Registration",
                    description: "Explore the registration support process.",
                    fullDescription:
                        "GST registration involves gathering the applicable information and documents and following the required registration process.",
                    sections: [
                        {
                            number: "01",
                            title: "Information",
                            paragraphs: [
                                "The information required depends on the applicant and business structure."
                            ],
                            items: [
                                "Business information",
                                "PAN-related information",
                                "Address details",
                                "Bank details where applicable",
                                "Supporting documents"
                            ]
                        }
                    ]
                },

                {
                    number: "02",
                    id: "gst-returns",
                    title: "GST Returns",
                    description: "Support for GST return-related requirements.",
                    fullDescription:
                        "GST return work can involve organising transaction information and relevant records before the applicable filing process.",
                    sections: [
                        {
                            number: "01",
                            title: "Work areas",
                            paragraphs: [
                                "The exact return and information required depend on the taxpayer's registration and applicable requirements."
                            ],
                            items: [
                                "Sales information",
                                "Purchase information",
                                "Tax records",
                                "Invoice information",
                                "Return preparation support"
                            ]
                        }
                    ]
                },

                {
                    number: "03",
                    id: "gst-records",
                    title: "GST Records",
                    description: "Organise invoices and transaction records.",
                    fullDescription:
                        "Good GST records help maintain a structured view of transactions and supporting information.",
                    sections: [
                        {
                            number: "01",
                            title: "Records",
                            paragraphs: [
                                "Relevant records should be maintained in an organised manner."
                            ],
                            items: [
                                "Sales invoices",
                                "Purchase invoices",
                                "Credit / debit information",
                                "Payment records",
                                "Supporting documents"
                            ]
                        }
                    ]
                },

                {
                    number: "04",
                    id: "gst-compliance",
                    title: "GST Compliance",
                    description: "Explore ongoing GST-related compliance areas.",
                    fullDescription:
                        "GST compliance can involve recurring records, return-related work and maintaining relevant documentation.",
                    sections: [
                        {
                            number: "01",
                            title: "Ongoing areas",
                            paragraphs: [
                                "The exact compliance calendar depends on the registration and applicable requirements."
                            ],
                            items: [
                                "Record maintenance",
                                "Invoice organisation",
                                "Return-related work",
                                "Documentation",
                                "Follow-up"
                            ]
                        }
                    ]
                }

            ],

            related: ["income-tax", "accounting", "tds"]
        },


        {
            id: "accounting",
            number: "03",
            icon: "A",
            category: "FINANCE",
            name: "Accounting",
            short: "Books, ledgers & reconciliation",
            description: "Organised accounting support for recurring business records.",
            longDescription:
                "Explore bookkeeping, ledger management, bank reconciliation and accounting record support.",
            tags: ["Bookkeeping", "Ledger", "Reconciliation"],

            topics: [

                {
                    number: "01",
                    id: "monthly-accounting",
                    title: "Monthly Accounting",
                    description: "Ongoing accounting support for recurring business activity.",
                    fullDescription:
                        "Monthly accounting involves keeping business records organised on an ongoing basis.",
                    sections: [
                        {
                            number: "01",
                            title: "What may be handled",
                            paragraphs: [
                                "The scope depends on the business and its accounting requirements."
                            ],
                            items: [
                                "Transaction recording",
                                "Ledger updates",
                                "Bank reconciliation",
                                "Expense records",
                                "Monthly review"
                            ]
                        }
                    ]
                },

                {
                    number: "02",
                    id: "bookkeeping",
                    title: "Bookkeeping",
                    description: "Maintain organised day-to-day accounting records.",
                    fullDescription:
                        "Bookkeeping is the foundation of structured financial records.",
                    sections: [
                        {
                            number: "01",
                            title: "Typical work",
                            paragraphs: [
                                "Transactions can be organised according to the applicable accounting structure."
                            ],
                            items: [
                                "Income entries",
                                "Expense entries",
                                "Purchase records",
                                "Sales records",
                                "Ledger organisation"
                            ]
                        }
                    ]
                },

                {
                    number: "03",
                    id: "bank-reconciliation",
                    title: "Bank Reconciliation",
                    description: "Compare accounting records with bank transactions.",
                    fullDescription:
                        "Bank reconciliation helps identify differences between accounting records and bank transactions.",
                    sections: [
                        {
                            number: "01",
                            title: "Review",
                            paragraphs: [
                                "Bank records and accounting records can be compared to identify entries requiring clarification."
                            ],
                            items: [
                                "Bank statement review",
                                "Ledger comparison",
                                "Difference identification",
                                "Entry review"
                            ]
                        }
                    ]
                },

                {
                    number: "04",
                    id: "financial-statements",
                    title: "Financial Statements",
                    description: "Organise information for financial reporting.",
                    fullDescription:
                        "Financial statements present organised financial information based on the underlying accounting records.",
                    sections: [
                        {
                            number: "01",
                            title: "Information areas",
                            paragraphs: [
                                "The applicable statements depend on the nature and requirements of the business."
                            ],
                            items: [
                                "Income information",
                                "Expense information",
                                "Assets",
                                "Liabilities",
                                "Accounting records"
                            ]
                        }
                    ]
                }

            ],

            related: ["gst", "business-accounting", "financial-statements"]
        },


        {
            id: "tds",
            number: "04",
            icon: "T",
            category: "TAX DEDUCTION",
            name: "TDS",
            short: "Records, documentation & compliance",
            description: "Support around TDS records, documentation and applicable compliance.",
            longDescription:
                "Explore TDS-related record keeping, documentation and compliance support.",
            tags: ["Records", "Documents", "Compliance"],

            topics: [

                {
                    number: "01",
                    id: "tds-records",
                    title: "TDS Records",
                    description: "Organise TDS-related transaction information.",
                    fullDescription:
                        "TDS records should be maintained in an organised manner based on the applicable transactions and requirements.",
                    sections: [
                        {
                            number: "01",
                            title: "Records",
                            paragraphs: [
                                "The required records depend on the nature of the payment and applicable provisions."
                            ],
                            items: [
                                "Payment information",
                                "Deduction information",
                                "Party details",
                                "Supporting records"
                            ]
                        }
                    ]
                },

                {
                    number: "02",
                    id: "tds-documents",
                    title: "TDS Documentation",
                    description: "Maintain supporting documentation.",
                    fullDescription:
                        "Proper documentation helps organise TDS-related information for review and compliance work.",
                    sections: [
                        {
                            number: "01",
                            title: "Documentation",
                            paragraphs: [
                                "Documents vary depending on the nature of the transaction."
                            ],
                            items: [
                                "Payment records",
                                "Deduction records",
                                "Party information",
                                "Supporting documents"
                            ]
                        }
                    ]
                },

                {
                    number: "03",
                    id: "tds-compliance",
                    title: "TDS Compliance",
                    description: "Explore applicable recurring compliance areas.",
                    fullDescription:
                        "TDS compliance can involve recurring record keeping and applicable filing or documentation requirements.",
                    sections: [
                        {
                            number: "01",
                            title: "Ongoing work",
                            paragraphs: [
                                "Applicable requirements depend on the transaction and taxpayer circumstances."
                            ],
                            items: [
                                "Record maintenance",
                                "Review",
                                "Documentation",
                                "Applicable filing support"
                            ]
                        }
                    ]
                }

            ],

            related: ["income-tax", "accounting"]
        },


        {
            id: "audit",
            number: "05",
            icon: "✓",
            category: "COMPLIANCE",
            name: "Audit & Compliance",
            short: "Records, review & documentation",
            description: "Structured support around records, review and applicable compliance.",
            longDescription:
                "Explore documentation, record preparation, review support and applicable compliance-related work.",
            tags: ["Review", "Records", "Compliance"],

            topics: [

                {
                    number: "01",
                    id: "record-preparation",
                    title: "Record Preparation",
                    description: "Organise records before review.",
                    fullDescription:
                        "Well-organised records make the review process easier to navigate.",
                    sections: [
                        {
                            number: "01",
                            title: "Preparation areas",
                            paragraphs: [
                                "The exact record requirements depend on the engagement."
                            ],
                            items: [
                                "Accounting records",
                                "Supporting documents",
                                "Transaction records",
                                "Relevant statements"
                            ]
                        }
                    ]
                },

                {
                    number: "02",
                    id: "review-support",
                    title: "Review Support",
                    description: "Support the process of reviewing available records.",
                    fullDescription:
                        "Review support can involve organising and presenting the information needed for an engagement.",
                    sections: [
                        {
                            number: "01",
                            title: "Typical areas",
                            paragraphs: [
                                "The exact scope depends on the nature of the review."
                            ],
                            items: [
                                "Document organisation",
                                "Record review",
                                "Information clarification",
                                "Follow-up"
                            ]
                        }
                    ]
                },

                {
                    number: "03",
                    id: "compliance-documentation",
                    title: "Compliance Documentation",
                    description: "Maintain relevant supporting documentation.",
                    fullDescription:
                        "Compliance work often requires clear supporting records and organised documentation.",
                    sections: [
                        {
                            number: "01",
                            title: "Documentation",
                            paragraphs: [
                                "Documentation requirements vary by the relevant compliance matter."
                            ],
                            items: [
                                "Records",
                                "Statements",
                                "Supporting documents",
                                "Correspondence"
                            ]
                        }
                    ]
                }

            ],

            related: ["accounting", "gst", "tds"]
        },


        {
            id: "business-accounting",
            number: "06",
            icon: "B",
            category: "BUSINESS",
            name: "Business Accounting",
            short: "Books, reports & ongoing support",
            description: "Accounting support designed around recurring business requirements.",
            longDescription:
                "Explore business accounting areas including books, reporting, record management and ongoing support.",
            tags: ["Business", "Reports", "Ongoing"],

            topics: [

                {
                    number: "01",
                    id: "business-books",
                    title: "Business Books",
                    description: "Maintain organised business accounting records.",
                    fullDescription:
                        "Business books provide the structured accounting record for the organisation's transactions.",
                    sections: [
                        {
                            number: "01",
                            title: "Typical areas",
                            paragraphs: [
                                "The accounting structure depends on the nature and size of the business."
                            ],
                            items: [
                                "Sales",
                                "Purchases",
                                "Expenses",
                                "Bank transactions",
                                "Ledgers"
                            ]
                        }
                    ]
                },

                {
                    number: "02",
                    id: "monthly-reporting",
                    title: "Monthly Reporting",
                    description: "Organise recurring financial information.",
                    fullDescription:
                        "Regular reporting can help business owners review organised financial information.",
                    sections: [
                        {
                            number: "01",
                            title: "Possible information",
                            paragraphs: [
                                "Reporting depends on the business requirement and accounting records."
                            ],
                            items: [
                                "Income",
                                "Expenses",
                                "Outstanding records",
                                "Bank information",
                                "Financial summaries"
                            ]
                        }
                    ]
                },

                {
                    number: "03",
                    id: "ongoing-support",
                    title: "Ongoing Support",
                    description: "Continue accounting and compliance support.",
                    fullDescription:
                        "Businesses often need recurring support rather than a single accounting activity.",
                    sections: [
                        {
                            number: "01",
                            title: "Support areas",
                            paragraphs: [
                                "The ongoing scope can be discussed according to the business's needs."
                            ],
                            items: [
                                "Regular bookkeeping",
                                "Records",
                                "Compliance coordination",
                                "Reporting",
                                "Follow-up"
                            ]
                        }
                    ]
                }

            ],

            related: ["accounting", "gst", "income-tax"]
        },


        {
            id: "financial-statements",
            number: "07",
            icon: "F",
            category: "REPORTING",
            name: "Financial Statements",
            short: "Organised financial information",
            description: "Support for organising financial information for reporting.",
            longDescription:
                "Explore financial statement-related work and the records that support financial reporting.",
            tags: ["Reports", "Records", "Finance"],

            topics: [

                {
                    number: "01",
                    id: "financial-reporting",
                    title: "Financial Reporting",
                    description: "Organise accounting information into useful reports.",
                    fullDescription:
                        "Financial reporting presents structured financial information based on the underlying records.",
                    sections: [
                        {
                            number: "01",
                            title: "Information",
                            paragraphs: [
                                "The applicable reports depend on the organisation's requirements."
                            ],
                            items: [
                                "Revenue",
                                "Expenses",
                                "Assets",
                                "Liabilities",
                                "Financial records"
                            ]
                        }
                    ]
                }

            ],

            related: ["accounting", "business-accounting"]
        },


        {
            id: "monthly-compliance",
            number: "08",
            icon: "M",
            category: "ONGOING",
            name: "Monthly Compliance",
            short: "Recurring records & follow-up",
            description: "Ongoing support for recurring accounting and compliance requirements.",
            longDescription:
                "Explore recurring monthly accounting, records, documentation and compliance coordination.",
            tags: ["Monthly", "Ongoing", "Records"],

            topics: [

                {
                    number: "01",
                    id: "monthly-records",
                    title: "Monthly Records",
                    description: "Maintain records on an ongoing basis.",
                    fullDescription:
                        "Monthly record maintenance helps keep financial information organised throughout the year.",
                    sections: [
                        {
                            number: "01",
                            title: "Possible work",
                            paragraphs: [
                                "The exact scope depends on the business and engagement."
                            ],
                            items: [
                                "Transaction records",
                                "Bank records",
                                "Expenses",
                                "Invoices",
                                "Ledger updates"
                            ]
                        }
                    ]
                },

                {
                    number: "02",
                    id: "monthly-followup",
                    title: "Monthly Follow-up",
                    description: "Keep recurring requirements organised.",
                    fullDescription:
                        "Ongoing support can help coordinate recurring accounting and compliance activities.",
                    sections: [
                        {
                            number: "01",
                            title: "Coordination",
                            paragraphs: [
                                "The recurring activities depend on the applicable requirements."
                            ],
                            items: [
                                "Document follow-up",
                                "Record review",
                                "Accounting updates",
                                "Compliance coordination"
                            ]
                        }
                    ]
                }

            ],

            related: ["accounting", "gst", "tds"]
        }

    ];


    /* =========================================
       QUICK SERVICES
    ========================================= */

    $scope.quickServices = [
        $scope.services[0],
        $scope.services[1],
        $scope.services[2]
    ];


    /* =========================================
       SOLUTIONS
    ========================================= */

    $scope.solutions = [

        {
            number: "01",
            icon: "P",
            name: "Individuals",
            description: "Personal tax, documentation and financial record requirements.",
            longDescription:
                "Individuals may need support for income-tax work, documentation, records and other financial requirements.",
            needs: [
                {
                    title: "Income Tax Return",
                    description: "Organise information and documents for ITR-related work.",
                    fullDescription:
                        "Individual tax return requirements depend on income sources, deductions, records and the applicable return requirements.",
                    items: [
                        "Income information",
                        "Tax documents",
                        "Bank information",
                        "Investment / deduction records",
                        "Previous records where relevant"
                    ]
                },
                {
                    title: "Tax Documentation",
                    description: "Organise documents required for tax work.",
                    fullDescription:
                        "Tax documentation should be organised according to the individual's circumstances and the relevant requirement.",
                    items: [
                        "Income records",
                        "Deduction documents",
                        "Investment information",
                        "Tax statements"
                    ]
                },
                {
                    title: "Tax Consultation",
                    description: "Discuss a specific tax question.",
                    fullDescription:
                        "A consultation allows the specific situation and requirement to be explained before deciding the next step.",
                    items: [
                        "Explain the situation",
                        "Identify the requirement",
                        "Review available information",
                        "Discuss next steps"
                    ]
                }
            ]
        },


        {
            number: "02",
            icon: "P",
            name: "Professionals",
            description: "Accounting and tax support for professional activities.",
            longDescription:
                "Professionals can explore accounting, income-tax, documentation and recurring record requirements.",
            needs: [
                {
                    title: "Professional Accounting",
                    description: "Organise income, expenses and accounting records.",
                    fullDescription:
                        "Professional activities can involve recurring income and expense records that need structured accounting.",
                    items: [
                        "Income records",
                        "Expense records",
                        "Bank transactions",
                        "Ledger organisation",
                        "Financial summaries"
                    ]
                },
                {
                    title: "Tax Records",
                    description: "Prepare organised information for tax-related work.",
                    fullDescription:
                        "Tax work becomes easier when professional income and expense information is maintained systematically.",
                    items: [
                        "Income details",
                        "Expense records",
                        "Investment information",
                        "Tax documents"
                    ]
                }
            ]
        },


        {
            number: "03",
            icon: "B",
            name: "Small Businesses",
            description: "Accounting, GST and ongoing business support.",
            longDescription:
                "Small businesses often need a connected approach covering books, GST, tax, records and recurring accounting.",
            needs: [
                {
                    title: "Business Accounting",
                    description: "Maintain structured business books.",
                    fullDescription:
                        "Business accounting can include regular transaction recording, ledger management and bank reconciliation.",
                    items: [
                        "Sales",
                        "Purchases",
                        "Expenses",
                        "Bank reconciliation",
                        "Ledgers"
                    ]
                },
                {
                    title: "GST Support",
                    description: "Explore registration, records and return-related work.",
                    fullDescription:
                        "GST requirements depend on the registration and applicable rules.",
                    items: [
                        "GST registration support",
                        "Invoice records",
                        "Transaction information",
                        "Return-related work"
                    ]
                },
                {
                    title: "Monthly Support",
                    description: "Recurring accounting and record maintenance.",
                    fullDescription:
                        "Monthly support can be structured around the recurring accounting and compliance needs of the business.",
                    items: [
                        "Monthly bookkeeping",
                        "Records",
                        "Bank reconciliation",
                        "Reporting",
                        "Follow-up"
                    ]
                }
            ]
        },


        {
            number: "04",
            icon: "T",
            name: "Traders",
            description: "Records, accounting, GST and tax-related requirements.",
            longDescription:
                "Trading businesses can explore accounting, transaction records, GST and tax-related support.",
            needs: [
                {
                    title: "Trading Accounts",
                    description: "Organise sales, purchases and expenses.",
                    fullDescription:
                        "Trading activity generates recurring transaction information that can be maintained through organised accounting records.",
                    items: [
                        "Sales",
                        "Purchases",
                        "Expenses",
                        "Bank records",
                        "Stock-related information where applicable"
                    ]
                },
                {
                    title: "GST Records",
                    description: "Organise invoices and GST-related transaction information.",
                    fullDescription:
                        "GST records can be organised around the business's sales and purchase transactions.",
                    items: [
                        "Sales invoices",
                        "Purchase invoices",
                        "Tax records",
                        "Supporting documents"
                    ]
                }
            ]
        },


        {
            number: "05",
            icon: "S",
            name: "Startups",
            description: "Structured accounting and compliance foundations.",
            longDescription:
                "Startups can explore accounting setup, record management, tax and recurring compliance support.",
            needs: [
                {
                    title: "Accounting Setup",
                    description: "Build an organised accounting record structure.",
                    fullDescription:
                        "An organised accounting structure can help a growing business maintain consistent financial records.",
                    items: [
                        "Chart / ledger organisation",
                        "Transaction recording",
                        "Expense classification",
                        "Bank records"
                    ]
                },
                {
                    title: "Ongoing Compliance",
                    description: "Coordinate recurring accounting and compliance requirements.",
                    fullDescription:
                        "Growing businesses can require recurring record and compliance coordination.",
                    items: [
                        "Monthly records",
                        "GST-related work where applicable",
                        "Tax records",
                        "Financial reporting"
                    ]
                }
            ]
        },


        {
            number: "06",
            icon: "F",
            name: "Firms & Organisations",
            description: "Financial records, compliance and reporting support.",
            longDescription:
                "Firms and organisations can explore structured accounting, reporting, documentation and compliance-related requirements.",
            needs: [
                {
                    title: "Financial Records",
                    description: "Maintain structured organisational records.",
                    fullDescription:
                        "Organisations can benefit from consistent financial record maintenance and documentation.",
                    items: [
                        "Accounting records",
                        "Bank reconciliation",
                        "Expense records",
                        "Financial summaries"
                    ]
                },
                {
                    title: "Reporting",
                    description: "Organise financial information for reporting.",
                    fullDescription:
                        "Financial reporting depends on the organisation's requirements and underlying accounting records.",
                    items: [
                        "Revenue",
                        "Expenses",
                        "Assets",
                        "Liabilities",
                        "Financial information"
                    ]
                }
            ]
        }

    ];


    /* =========================================
       PROCESS
    ========================================= */

    $scope.processSteps = [

        {
            number: "01",
            label: "START",
            title: "First Conversation",
            description: "Understand the requirement before deciding the route.",
            fullDescription:
                "The process begins by understanding what the client needs, what has already been done and what information is available.",
            blocks: [
                {
                    title: "Understand",
                    description: "Explain the situation and requirement.",
                    items: [
                        "What do you need?",
                        "What is the relevant period?",
                        "What documents are available?"
                    ]
                },
                {
                    title: "Identify",
                    description: "Determine the relevant service area.",
                    items: [
                        "Tax",
                        "GST",
                        "Accounting",
                        "TDS",
                        "Compliance"
                    ]
                }
            ]
        },

        {
            number: "02",
            label: "COLLECT",
            title: "Document Collection",
            description: "Gather the relevant information and supporting records.",
            fullDescription:
                "Once the requirement is understood, the relevant documents and information can be collected and organised.",
            blocks: [
                {
                    title: "Documents",
                    description: "Collect the records relevant to the requirement.",
                    items: [
                        "Statements",
                        "Invoices",
                        "Income records",
                        "Expense records"
                    ]
                },
                {
                    title: "Organisation",
                    description: "Arrange the information so it can be reviewed.",
                    items: [
                        "Sort records",
                        "Identify missing information",
                        "Clarify questions"
                    ]
                }
            ]
        },

        {
            number: "03",
            label: "REVIEW",
            title: "Information Review",
            description: "Review the available records and identify the required work.",
            fullDescription:
                "The available information can be reviewed to understand the scope of work and identify any missing or unclear information.",
            blocks: [
                {
                    title: "Review",
                    description: "Look at the available information.",
                    items: [
                        "Records",
                        "Transactions",
                        "Documents",
                        "Previous information where relevant"
                    ]
                },
                {
                    title: "Clarify",
                    description: "Resolve information gaps.",
                    items: [
                        "Questions",
                        "Missing documents",
                        "Unclear entries"
                    ]
                }
            ]
        },

        {
            number: "04",
            label: "WORK",
            title: "Preparation & Work",
            description: "Complete the agreed accounting, tax or compliance work.",
            fullDescription:
                "After the information has been reviewed, the agreed work can be undertaken according to the relevant requirements.",
            blocks: [
                {
                    title: "Prepare",
                    description: "Organise and process the relevant information.",
                    items: [
                        "Accounting records",
                        "Tax information",
                        "GST information",
                        "Compliance documents"
                    ]
                },
                {
                    title: "Review",
                    description: "Check the prepared information.",
                    items: [
                        "Internal review",
                        "Information check",
                        "Clarification where needed"
                    ]
                }
            ]
        },

        {
            number: "05",
            label: "COMPLETE",
            title: "Completion",
            description: "Complete the applicable activity and communicate the result.",
            fullDescription:
                "The final stage depends on the specific service. It may involve completing the relevant activity and communicating the next requirement.",
            blocks: [
                {
                    title: "Completion",
                    description: "Complete the applicable task.",
                    items: [
                        "Final review",
                        "Applicable submission",
                        "Record completion"
                    ]
                },
                {
                    title: "Communication",
                    description: "Explain the next steps where relevant.",
                    items: [
                        "Final information",
                        "Records",
                        "Follow-up requirements"
                    ]
                }
            ]
        },

        {
            number: "06",
            label: "ONGOING",
            title: "Follow-up & Support",
            description: "Continue with recurring requirements where required.",
            fullDescription:
                "Some accounting, GST and compliance activities are recurring. Ongoing support can be structured around the relevant schedule.",
            blocks: [
                {
                    title: "Recurring Work",
                    description: "Maintain regular records and activities.",
                    items: [
                        "Monthly accounting",
                        "Recurring documentation",
                        "Applicable compliance"
                    ]
                },
                {
                    title: "Follow-up",
                    description: "Keep future requirements organised.",
                    items: [
                        "Document follow-up",
                        "Upcoming activities",
                        "Record maintenance"
                    ]
                }
            ]
        }

    ];


    /* =========================================
       COMPANY
    ========================================= */

    $scope.companyInfo = [

        {
            number: "01",
            title: "Clarity First",
            description:
                "The consultancy approach is centred around understanding the requirement first and then identifying the relevant work."
        },

        {
            number: "02",
            title: "Structured Work",
            description:
                "Tax, GST, accounting and compliance work is easier to manage when information and records are organised."
        },

        {
            number: "03",
            title: "Ongoing Support",
            description:
                "Where requirements are recurring, support can be structured around regular accounting, documentation and compliance activities."
        }
    ];


    $scope.workAreas = [

        {
            number: "01",
            title: "Taxation",
            description: "Income tax, ITR and tax documentation.",
            longDescription:
                "Taxation-related work can include return preparation support, tax documentation, information organisation and consultation.",
            items: [
                {
                    title: "Income Tax Returns",
                    description: "Support for organising information and applicable return requirements."
                },
                {
                    title: "Tax Documentation",
                    description: "Organising the documents and information needed for tax work."
                },
                {
                    title: "Tax Consultation",
                    description: "Discussion around a specific tax-related requirement."
                }
            ]
        },

        {
            number: "02",
            title: "GST",
            description: "GST registration, records and return-related work.",
            longDescription:
                "GST-related work can include registration support, invoice and transaction records, return-related activities and documentation.",
            items: [
                {
                    title: "Registration",
                    description: "Support with information and documents for applicable registration requirements."
                },
                {
                    title: "Returns",
                    description: "Organising transaction information for return-related activities."
                },
                {
                    title: "GST Records",
                    description: "Maintaining structured invoice and transaction records."
                }
            ]
        },

        {
            number: "03",
            title: "Accounting",
            description: "Bookkeeping, ledgers and reconciliation.",
            longDescription:
                "Accounting work can include day-to-day bookkeeping, ledger management, bank reconciliation and financial record organisation.",
            items: [
                {
                    title: "Bookkeeping",
                    description: "Recording and organising business transactions."
                },
                {
                    title: "Bank Reconciliation",
                    description: "Comparing accounting records with bank transactions."
                },
                {
                    title: "Ledger Management",
                    description: "Maintaining structured accounting ledgers."
                }
            ]
        },

        {
            number: "04",
            title: "TDS",
            description: "TDS records, documentation and compliance.",
            longDescription:
                "TDS-related work can involve organising payment records, deduction information and applicable compliance documentation.",
            items: [
                {
                    title: "TDS Records",
                    description: "Organising relevant transaction and deduction information."
                },
                {
                    title: "Documentation",
                    description: "Maintaining supporting records."
                },
                {
                    title: "Compliance",
                    description: "Supporting applicable recurring TDS requirements."
                }
            ]
        },

        {
            number: "05",
            title: "Financial Reporting",
            description: "Organised financial information and statements.",
            longDescription:
                "Financial reporting involves presenting organised information based on the underlying accounting records.",
            items: [
                {
                    title: "Financial Information",
                    description: "Organising income, expenses, assets and liabilities."
                },
                {
                    title: "Statements",
                    description: "Supporting the preparation of applicable financial statements."
                }
            ]
        },

        {
            number: "06",
            title: "Compliance",
            description: "Documentation, review and ongoing requirements.",
            longDescription:
                "Compliance-related work can involve maintaining relevant records, documentation and supporting recurring requirements.",
            items: [
                {
                    title: "Documentation",
                    description: "Maintaining supporting documents."
                },
                {
                    title: "Record Review",
                    description: "Organising records for review."
                },
                {
                    title: "Ongoing Support",
                    description: "Coordinating recurring activities where required."
                }
            ]
        }

    ];


    /* =========================================
       KNOWLEDGE
    ========================================= */

    $scope.knowledge = [

        {
            number: "01",
            category: "TAX",
            title: "Before Filing an ITR",
            description: "A simple overview of information to organise before starting tax return work.",
            introduction:
                "Before starting an income-tax return process, it is useful to collect and organise the relevant income, tax and deduction information.",
            blocks: [
                {
                    number: "01",
                    title: "Income information",
                    text: [
                        "Collect information relating to the income sources relevant to the return."
                    ],
                    items: [
                        "Salary or professional income where applicable",
                        "Other income information",
                        "Relevant statements"
                    ]
                },
                {
                    number: "02",
                    title: "Tax information",
                    text: [
                        "Keep available tax-related statements and records relevant to the filing."
                    ],
                    items: [
                        "Tax statements",
                        "Bank records",
                        "Previous return information where relevant"
                    ]
                }
            ]
        },

        {
            number: "02",
            category: "GST",
            title: "Keeping GST Records Organised",
            description: "Why invoices and transaction records matter.",
            introduction:
                "GST-related work depends on transaction information and supporting records. Keeping them organised makes review easier.",
            blocks: [
                {
                    number: "01",
                    title: "Invoices",
                    text: [
                        "Sales and purchase invoices should be maintained in an organised manner."
                    ],
                    items: [
                        "Sales invoices",
                        "Purchase invoices",
                        "Credit / debit records where relevant"
                    ]
                },
                {
                    number: "02",
                    title: "Transaction records",
                    text: [
                        "Maintain the records needed to understand the relevant business transactions."
                    ],
                    items: [
                        "Bank records",
                        "Payment information",
                        "Supporting documents"
                    ]
                }
            ]
        },

        {
            number: "03",
            category: "ACCOUNTING",
            title: "Why Monthly Accounting Matters",
            description: "Understand the purpose of maintaining regular business records.",
            introduction:
                "Regular accounting helps maintain a current record of business activity instead of leaving records to be organised only at the end of a period.",
            blocks: [
                {
                    number: "01",
                    title: "Regular records",
                    text: [
                        "Monthly accounting can keep sales, purchases, expenses and bank transactions organised."
                    ],
                    items: [
                        "Sales",
                        "Purchases",
                        "Expenses",
                        "Bank transactions"
                    ]
                },
                {
                    number: "02",
                    title: "Review",
                    text: [
                        "Regular records can make it easier to review the financial position of the business."
                    ],
                    items: [
                        "Outstanding information",
                        "Expense patterns",
                        "Transaction records"
                    ]
                }
            ]
        },

        {
            number: "04",
            category: "DOCUMENTS",
            title: "Document Checklist",
            description: "A general starting point for organising financial documents.",
            introduction:
                "The exact documents depend on the service and individual circumstances. The following is only a general starting point.",
            blocks: [
                {
                    number: "01",
                    title: "Common records",
                    text: [
                        "Keep relevant statements, invoices and financial records together."
                    ],
                    items: [
                        "Bank statements",
                        "Invoices",
                        "Income records",
                        "Expense records",
                        "Tax-related statements"
                    ]
                },
                {
                    number: "02",
                    title: "Important note",
                    text: [
                        "A specific engagement may require additional documents. The consultant can identify the relevant information after understanding the requirement."
                    ]
                }
            ]
        },

        {
            number: "05",
            category: "GENERAL",
            title: "When Should You Ask for Help?",
            description: "Understand when a structured consultation can be useful.",
            introduction:
                "Professional assistance can be useful when a financial, tax or compliance requirement is unclear or involves several connected records.",
            blocks: [
                {
                    number: "01",
                    title: "Common situations",
                    text: [
                        "You may want to discuss the requirement when you are unsure about the applicable process or the documents needed."
                    ],
                    items: [
                        "You do not know where to start",
                        "Records are incomplete",
                        "Several services are connected",
                        "You need ongoing accounting support"
                    ]
                }
            ]
        },

        {
            number: "06",
            category: "IMPORTANT",
            title: "General Information Notice",
            description: "Understand the limits of general information on this website.",
            introduction:
                "The information on this website is intended as general information about the consultancy's service areas.",
            blocks: [
                {
                    number: "01",
                    title: "Specific situations",
                    text: [
                        "Tax, GST, accounting and compliance requirements can vary according to individual facts and applicable rules."
                    ]
                },
                {
                    number: "02",
                    title: "Before acting",
                    text: [
                        "For a specific matter, discuss the relevant facts and documents with the consultant."
                    ]
                }
            ]
        }

    ];


    /* =========================================
       VIEW SYSTEM
    ========================================= */

    $scope.currentView = {
        type: "home",
        nav: "home",
        breadcrumbs: []
    };


    $scope.transitionClass = "";


    $scope.navigate = function(view) {

        $scope.history.push($scope.currentView);

        $scope.currentView = view;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    $scope.goBack = function() {

        if ($scope.history.length > 0) {

            $scope.currentView =
                $scope.history.pop();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        } else {

            $scope.goHome();

        }
    };


    $scope.goHome = function() {

        $scope.history = [];

        $scope.currentView = {
            type: "home",
            nav: "home",
            breadcrumbs: []
        };

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    /* =========================================
       NAVIGATION
    ========================================= */

    $scope.openServices = function() {

        $scope.navigate({
            type: "services",
            nav: "services",
            breadcrumbs: [
                {
                    label: "Services",
                    clickable: false
                }
            ]
        });

    };


    $scope.openService = function(service) {

        $scope.navigate({
            type: "serviceDetail",
            nav: "services",
            service: service,
            breadcrumbs: [
                {
                    label: "Services",
                    clickable: true,
                    action: $scope.openServices
                },
                {
                    label: service.name,
                    clickable: false
                }
            ]
        });

    };


    $scope.openServiceById = function(id) {

        var service = $scope.services.find(function(item) {
            return item.id === id;
        });

        if (service) {
            $scope.openService(service);
        }

    };


    $scope.getServiceName = function(id) {

        var service = $scope.services.find(function(item) {
            return item.id === id;
        });

        return service ? service.name : id;
    };


    $scope.openTopic = function(service, topic) {

        $scope.navigate({
            type: "topicDetail",
            nav: "services",
            service: service,
            topic: topic,
            breadcrumbs: [
                {
                    label: "Services",
                    clickable: true,
                    action: $scope.openServices
                },
                {
                    label: service.name,
                    clickable: true,
                    action: function() {
                        $scope.openService(service);
                    }
                },
                {
                    label: topic.title,
                    clickable: false
                }
            ]
        });

    };


    /* =========================================
       SOLUTIONS
    ========================================= */

    $scope.openSolutions = function() {

        $scope.navigate({
            type: "solutions",
            nav: "solutions",
            breadcrumbs: [
                {
                    label: "Who We Help",
                    clickable: false
                }
            ]
        });

    };


    $scope.openSolution = function(solution) {

        $scope.navigate({
            type: "solutionDetail",
            nav: "solutions",
            solution: solution,
            breadcrumbs: [
                {
                    label: "Who We Help",
                    clickable: true,
                    action: $scope.openSolutions
                },
                {
                    label: solution.name,
                    clickable: false
                }
            ]
        });

    };


    $scope.openNeed = function(solution, need) {

        $scope.navigate({
            type: "needDetail",
            nav: "solutions",
            solution: solution,
            need: need,
            breadcrumbs: [
                {
                    label: "Who We Help",
                    clickable: true,
                    action: $scope.openSolutions
                },
                {
                    label: solution.name,
                    clickable: true,
                    action: function() {
                        $scope.openSolution(solution);
                    }
                },
                {
                    label: need.title,
                    clickable: false
                }
            ]
        });

    };


    /* =========================================
       PROCESS
    ========================================= */

    $scope.openProcess = function() {

        $scope.navigate({
            type: "process",
            nav: "process",
            breadcrumbs: [
                {
                    label: "How We Work",
                    clickable: false
                }
            ]
        });

    };


    $scope.openProcessStep = function(step) {

        $scope.navigate({
            type: "processDetail",
            nav: "process",
            step: step,
            breadcrumbs: [
                {
                    label: "How We Work",
                    clickable: true,
                    action: $scope.openProcess
                },
                {
                    label: step.title,
                    clickable: false
                }
            ]
        });

    };


    /* =========================================
       COMPANY
    ========================================= */

    $scope.openCompany = function() {

        $scope.navigate({
            type: "company",
            nav: "company",
            breadcrumbs: [
                {
                    label: "Company",
                    clickable: false
                }
            ]
        });

    };


    $scope.openCompanyAbout = function() {

        $scope.navigate({
            type: "companyAbout",
            nav: "company",
            breadcrumbs: [
                {
                    label: "Company",
                    clickable: true,
                    action: $scope.openCompany
                },
                {
                    label: "About DHYEY",
                    clickable: false
                }
            ]
        });

    };


    $scope.openConsultant = function() {

        $scope.navigate({
            type: "consultant",
            nav: "company",
            breadcrumbs: [
                {
                    label: "Company",
                    clickable: true,
                    action: $scope.openCompany
                },
                {
                    label: "Consultant",
                    clickable: false
                }
            ]
        });

    };


    $scope.openWorkAreas = function() {

        $scope.navigate({
            type: "workAreas",
            nav: "company",
            breadcrumbs: [
                {
                    label: "Company",
                    clickable: true,
                    action: $scope.openCompany
                },
                {
                    label: "Areas We Handle",
                    clickable: false
                }
            ]
        });

    };


    $scope.openWorkArea = function(area) {

        $scope.navigate({
            type: "workAreaDetail",
            nav: "company",
            area: area,
            breadcrumbs: [
                {
                    label: "Company",
                    clickable: true,
                    action: $scope.openCompany
                },
                {
                    label: "Areas We Handle",
                    clickable: true,
                    action: $scope.openWorkAreas
                },
                {
                    label: area.title,
                    clickable: false
                }
            ]
        });

    };


    /* =========================================
       KNOWLEDGE
    ========================================= */

    $scope.openKnowledge = function() {

        $scope.navigate({
            type: "knowledge",
            nav: "knowledge",
            breadcrumbs: [
                {
                    label: "Knowledge",
                    clickable: false
                }
            ]
        });

    };


    $scope.openKnowledgeArticle = function(article) {

        $scope.navigate({
            type: "knowledgeArticle",
            nav: "knowledge",
            article: article,
            breadcrumbs: [
                {
                    label: "Knowledge",
                    clickable: true,
                    action: $scope.openKnowledge
                },
                {
                    label: article.title,
                    clickable: false
                }
            ]
        });

    };


    /* =========================================
       CONTACT
    ========================================= */

    $scope.openContact = function() {

        $scope.navigate({
            type: "contact",
            nav: "contact",
            breadcrumbs: [
                {
                    label: "Client Desk",
                    clickable: false
                }
            ]
        });

    };


    /* =========================================
       WHATSAPP FORM
    ========================================= */

    $scope.submitEnquiry = function() {

        var name =
            $scope.form.name || "";

        var phone =
            $scope.form.phone || "";

        var requirement =
            $scope.form.requirement || "General Enquiry";

        var message =
            $scope.form.message || "";

        var text =
            "Hello DHYEY CONSULTANCY,%0A%0A" +

            "Name: " +
            encodeURIComponent(name) +

            "%0APhone: " +
            encodeURIComponent(phone) +

            "%0ARequirement: " +
            encodeURIComponent(requirement) +

            "%0AMessage: " +
            encodeURIComponent(message);

        window.open(
            "https://wa.me/919924246408?text=" + text,
            "_blank"
        );

    };

});