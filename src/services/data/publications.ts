import {
  EPublicationType,
  EPublisherNames,
  EResearcherNames,
} from '@/services/types/publications';

export const publications = [
  {
    year: 2024,
    items: [
      {
        title:
          'Jonathan Silver. The Infrastructural South: Techno-Environments of the Third Wave of Urbanization.',
        authors: EResearcherNames.Mathias_Isiani,
        summary:
          'This research critically examines the post-civil war Igba-boi apprenticeship system, unveiling its pivotal role in shaping Onitsha into a thriving urban economic hub through robust human capital development. The apprenticeship system forged between a trader-mentor and a mentee over a specific timeframe act as a conduit for passing on trade expertise...',
        date: 'June, 2024',
        publisher: EPublisherNames.AfricanStudiesReviews,
        type: EPublicationType.BookReview,
        doi: 'https://www.cambridge.org/core/journals/african-studies-review/article/jonathan-silver-the-infrastructural-south-technoenvironments-of-the-third-wave-of-urbanization-cambridge-ma-mit-press-2023-ix-305-5000-paper-isbn-9780262546874/F44A07C66E064C0D34E5445B54A3CB3D',
      },
      {
        title:
          'The City of Boys: An ethnographic survey into the experiences of apprentices and urbanization of Onitsha City, Nigeria',
        authors: [
          EResearcherNames.Mathias_Isiani,
          EResearcherNames.Lovelyn_Isiani,
          EResearcherNames.Ngozika_Obi_Ani,
          EResearcherNames.Paul_Obi_Ani,
          EResearcherNames.Alexander_Isiani,
          EResearcherNames.Juliet_Isiani,
        ].join(', '),
        summary:
          'This research critically examines the post-civil war Igba-boi apprenticeship system, unveiling its pivotal role in shaping Onitsha into a thriving urban economic hub through robust human capital development. The apprenticeship system forged between a trader-mentor and a mentee over a specific timeframe act as a conduit for passing on trade expertise.',
        date: 'June, 2024',
        publisher: EPublisherNames.Cities,
        type: EPublicationType.Article,
        doi: 'https://www.sciencedirect.com/science/article/abs/pii/S0264275124002178?via%3Dihub',
      },
      {
        title:
          'Sakiru Adebayo, Continuous Past: Frictions of Memory in Postcolonial Africa',
        authors: EResearcherNames.Ngozika_Obi_Ani,
        summary:
          'Review of the book by Sakiru Adebayo. Ann Arbor, MI: University of Michigan Press, 2023',
        publisher: EPublisherNames.AfricanStudiesReviews,
        date: 'May, 2024',
        type: EPublicationType.BookReview,
        doi: 'https://www.cambridge.org/core/journals/african-studies-review/article/sakiru-adebayo-continuous-past-frictions-of-memory-in-postcolonial-africa-ann-arbor-mi-university-of-michigan-press-2023-196-pp-3495-paperback-isbn-9780472056231/A0E9DE0F83A28135706F8980F54EA290',
      },

      {
        title:
          'Sakiru Adebayo’s Continuous Pasts and the Challenge of Postcolonizing Memory Studies: Three Musings',
        authors: EResearcherNames.Chijioke_Onah,
        summary:
          'This article offers three musings on Sakiru Adebayo’s Continuous Pasts: Frictions of Memory in Postcolonial Africa, focusing specifically on the challenges and prospects of centering African histories, cultures, and epistemologies in mainstream memory studies.',
        publisher:
          EPublisherNames.CambridgeJournalOfPostcolonialLiteraryInquiry,
        date: 'May, 2024',
        type: EPublicationType.Article,
        doi: 'https://www.cambridge.org/core/journals/cambridge-journal-of-postcolonial-literary-inquiry/article/sakiru-adebayos-continuous-pasts-and-the-challenge-of-postcolonizing-memory-studies-three-musings/FA1973EB81A9F025DC3D06F7F7CA3E69',
      },
      {
        title:
          '#BringBackOurGirls: Transnational Activism and the Remediation of the 2014 Chibok Girls’ Kidnapping in Nigeria',
        authors: EResearcherNames.Chijioke_Onah,
        summary:
          'This article analyzes the global mediascapes of the campaign to show the mnemonic affordances of the Chibok girls’ kidnapping and the intermedial dynamics that coalesced to make it a global memory phenomenon.',
        publisher: EPublisherNames.AfricanStudiesReviews,
        date: 'March, 2024',
        type: EPublicationType.Article,
        doi: 'https://doi.org/10.1017/asr.2024.13',
      },
      {
        title:
          'Assessing the Misrepresentation of Igbo Cultural Values in Nollywood Films',
        authors: [
          EResearcherNames.Ngozika_Obi_Ani,
          EResearcherNames.Cindy_Ezeugwu,
          EResearcherNames.Chinenye_Anikwenze,
        ].join(', '),
        summary:
          'This paper aims to evaluate the extent to which the industry has gone to undermine the Igbo culture, in terms of religion, customs, social practices, intrinsic values, and cultural heritage.',
        date: 'March, 2024',
        publisher: EPublisherNames.NsukkaJournalOfTheHumanities,
        type: EPublicationType.Article,
        doi: 'https://www.njh.com.ng/admin/img/paper/NJH-32-1-2024-49-62.pdf',
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        title:
          'Memories of Nigeria-Biafra War, 1967–1970: A Case of Nsukka Igbo',
        authors: EResearcherNames.Ngozika_Obi_Ani,
        summary:
          'This chapter is an appraisal of how the Nsukka people remember their war experiences during the Nigeria-Biafra War',
        date: 'December, 2023',
        publisher:
          'Remembering Mass Atrocities: Perspectives on Memory Struggles and Cultural Representations in Africa',
        type: EPublicationType.BookChapter,
        doi: 'https://www.researchgate.net/publication/376952440_Memories_of_Nigeria-Biafra_War_1967-1970_A_Case_of_Nsukka_Igbo',
      },
      {
        title:
          'Decolonizing Trauma Studies:: The Recognition-Solidarity Nexus in Uwem Akpan’s Say You’re One of Them',
        authors: EResearcherNames.Chijioke_Onah,
        summary: '',
        date: 'December, 2023',
        publisher: 'African Literature in African Languages',
        type: EPublicationType.BookChapter,
        doi: 'https://www.jstor.org/stable/jj.4303807.28',
      },
      {
        title:
          'Streets Sides: Encounters with Migrant Women Beggars in Enugu City, Southeast Nigeria',
        authors: [
          EResearcherNames.Obinna_Ezeaku,
          EResearcherNames.Ngozika_Obi_Ani,
          EResearcherNames.Ogechi_Ikem,
        ].join(', '),
        summary:
          'This article scrutinizes the experiences of migrant women street beggers, contending that their relentless engagement in begging, despite adversities, can be linked to a sense of helplessness...',
        date: 'December, 2023',
        publisher: EPublisherNames.NsukkaJournalOfTheHumanities,
        type: EPublicationType.Article,
        doi: 'https://journals.co.za/doi/10.62250/nsuk.2023.31.2.61-77',
      },
      {
        title:
          'Reflecting on the Nkanu-Igbo Experience and the Military Occupation of Enugu and Environs by the Nigerian Army, 1967-1970',
        authors: [
          EResearcherNames.Ngozika_Obi_Ani,
          EResearcherNames.Paul_Obi_Ani,
          EResearcherNames.Ngozi_Ojiakor,
        ].join(', '),
        summary:
          'This article scrutinizes the experiences of migrant women street beggers, contending that their relentless engagement in begging, despite adversities, can be linked to a sense of helplessness...',
        date: 'April, 2023',
        publisher: EPublisherNames.NsukkaJournalOfTheHumanities,
        type: EPublicationType.Article,
        doi: 'https://journals.co.za/doi/10.62250/nsuk.2023.31.1.40-60',
      },
      {
        title: 'Religious Reactions And Interpretations Of Covid-19 In Nigeria',
        authors: [
          EResearcherNames.Odinaka_Eze,
          EResearcherNames.Ngozika_Obi_Ani,
          EResearcherNames.Mathias_Isiani,
        ].join(', '),
        summary:
          ' This study argues that COVID-19 is a biological phenomenon and not a necessary evil to forestall the worship of God or a sign of apocalypse as opined by some Christians.',
        date: 'February, 2023',
        publisher: '',
        type: EPublicationType.Article,
        doi: 'https://www.researchgate.net/publication/368386437_Religious_Reactions_And_Interpretations_Of_Covid-19_In_Nigeria',
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        title:
          'Not all deities were transformed in Igboland: a cultural history of the Api-Opi deity',
        authors: [
          EResearcherNames.Mathias_Isiani,
          EResearcherNames.Stanley_Onyemechalu,
          EResearcherNames.Somtochukwu_Osinem,
          EResearcherNames.Sopuluchukwu_Dimelu,
          EResearcherNames.Ngozika_Obi_Ani,
        ].join(', '),
        summary:
          'This study examines the cultural history of the Api-Opi deity in Opi, Nsukka, Enugu State of Nigeria. The study sets out to examine the re-emergence of youthful worshippers of Api-Opi, despite the penetration of Christianity in the area.',
        date: 'February, 2022',
        publisher:
          EPublisherNames.JournalOfCulturalHeritageManagementandSustainableDevelopment,
        type: EPublicationType.Article,
        doi: 'https://www.emerald.com/insight/content/doi/10.1108/JCHMSD-07-2021-0132/full/html',
      },
      {
        title:
          'Between Violent Separatist Agitation and Political Reforms? The Indigenous People of Biafra (IPOB) and the Crisis of Post-War Nigerian Federalism',
        authors: EResearcherNames.Ngozika_Obi_Ani,
        summary: 'Essay on the Crisis of Post-War Nigerian Federalism.',
        date: 'February, 2022',
        publisher: EPublisherNames.KujengaAmani,
        type: EPublicationType.Essay,
        doi: 'https://kujenga-amani.ssrc.org/2022/01/26/between-violent-separatist-agitation-and-political-reforms-the-indigenous-people-of-biafra-ipob-and-the-crisis-of-post-war-nigerian-federalism/',
      },
    ],
  },
  {
    year: 2021,
    items: [
      {
        title:
          '"Presumed urbanization": The experiences of Onitsha city slums dwellers',
        authors: [
          EResearcherNames.Mathias_Isiani,
          EResearcherNames.Ngozika_Obi_Ani,
          EResearcherNames.Paul_Obi_Ani,
        ].join(', '),
        summary:
          'This study examines the lived experiences of the people in Onitsha slums, the effect on children, the urban city, as well as the challenges posed by climate change.',
        date: 'November, 2021',
        publisher: EPublisherNames.Cities,
        type: EPublicationType.Article,
        doi: 'https://www.sciencedirect.com/science/article/abs/pii/S0264275121002985?via%3Dihub',
      },

      {
        title:
          'Creativity, spirituality and society: a study in preservation of Ikenga and Ọfọ sculptures in contemporary Igbo society',
        authors: [
          EResearcherNames.Mathias_Isiani,
          EResearcherNames.Ngozika_Obi_Ani,
          EResearcherNames.Chikelue_Akabuike,
          EResearcherNames.Stanley_Onyemechalu,
          EResearcherNames.Sochima_Okafor,
          EResearcherNames.Sopuluchukwu_Dimelu,
        ].join(', '),
        summary:
          'The overall aim of this research is to interpret Ikenga and Ofo creativity as it is revered in Igbo societies.',
        date: 'October, 2021',
        publisher:
          EPublisherNames.JournalOfCulturalHeritageManagementandSustainableDevelopment,
        type: EPublicationType.Article,
        doi: 'https://www.sciencedirect.com/science/article/abs/pii/S0264275121002985?via%3Dihub',
      },
      {
        title:
          'Interrogating the International Monetary Fund (IMF) Policies in Nigeria, 1986–2018',
        authors: [
          EResearcherNames.Mathias_Isiani,
          EResearcherNames.Ngozika_Obi_Ani,
          EResearcherNames.Paul_Obi_Ani,
          EResearcherNames.Chukwudi_Chidume,
          EResearcherNames.Stella_Okoye_Ugwu,
        ].join(', '),
        summary:
          'This paper in part, demonstrates that IMF policies in Nigeria vis-a-vis its Structural Adjustment Program (SAP) through its Loan Conditionality is “the crux impediment facing the country.”',
        date: 'June, 2021',
        publisher: EPublisherNames.CogentArtsAndHumanities,
        type: EPublicationType.Article,
        doi: 'https://www.tandfonline.com/doi/full/10.1080/23311983.2021.1932283',
      },
      {
        title:
          'Socio-Economic Transformations in Nigeria: The Role of Church Missionary Society (CMS) Schools and Social Stigmatization in Onitsha Province, 1904 – 1975',
        authors: [
          EResearcherNames.Mathias_Isiani,
          EResearcherNames.Uche_Okonkwo,
          EResearcherNames.Ngozika_Obi_Ani,
        ].join(', '),
        summary:
          'This paper in part, demonstrates that IMF policies in Nigeria vis-a-vis its Structural Adjustment Program (SAP) through its Loan Conditionality is “the crux impediment facing the country.”',
        date: 'May, 2021',
        publisher: EPublisherNames.CogentArtsAndHumanities,
        type: EPublicationType.Article,
        doi: 'https://www.tandfonline.com/doi/full/10.1080/23311983.2021.1922154',
      },
      {
        title:
          'The Hype of Coronavirus Pandemic in Southeast Nigeria: Some Thoughts',
        authors: [
          EResearcherNames.Mathias_Isiani,
          EResearcherNames.Ngozika_Obi_Ani,
          EResearcherNames.Paul_Obi_Ani,
        ].join(', '),
        summary:
          'This study through  its finding using statistical frequencies, demonstrates that before the detection of the first victim  of Covid-19 in Nigeria, the region was already agog with social media (mis)information about  the pandemic causing panic among the populace followed by the frenzy need to ‘forward’ such  messages to those in their contacts',
        date: 'February, 2021',
        publisher:
          EPublisherNames.SouthAsianJournalOfSocialSciencesAndHumanities,
        type: EPublicationType.Article,
        doi: 'https://www.tandfonline.com/doi/full/10.1080/23311983.2020.1799483',
      },
      {
        title:
          'Covid-19 pandemic and The Nigerian primary healthcare system: The leadership question',
        authors: [
          EResearcherNames.Ngozika_Obi_Ani,
          EResearcherNames.Obinna_Ezeaku,
          EResearcherNames.Ogechi_Ikem,
          EResearcherNames.Mathias_Isiani,
          EResearcherNames.Paul_Obi_Ani,
          EResearcherNames.Janefrances_Onu,
        ].join(', '),
        summary:
          'This paper argues that the outbreak of Covid-19 pandemic in Nigeria, its local dispersion occasioned by paucity of medical personnel and supplies due to decades of neglect of health care system is worrisome',
        date: 'January, 2021',
        publisher: EPublisherNames.CogentArtsAndHumanities,
        type: EPublicationType.Article,
        doi: 'https://www.tandfonline.com/doi/full/10.1080/23311983.2020.1859075',
      },
    ],
  },
  {
    year: 2020,
    items: [
      {
        title: 'Nigeria-Israeli Relations: "So Fragile So Emotional"',
        authors: [
          EResearcherNames.Ngozika_Obi_Ani,
          EResearcherNames.Paul_Obi_Ani,
        ].join(', '),
        summary:
          'This  theoretically based research paper used both secondary sources, newspapers and internet  materials, to interrogate Nigeria-Israeli relations.',
        date: 'October, 2020',
        publisher:
          EPublisherNames.SouthAsianJournalOfSocialSciencesAndHumanities,
        type: EPublicationType.Article,
        doi: 'https://acspublisher.com/journals/index.php/sajssh/article/view/11633',
      },
      {
        title:
          "From surviving to living: voice, trauma and witness in Rwandan women's writing",
        authors: EResearcherNames.Chijioke_Onah,
        summary:
          'Review of the book by Catherine Gilbert, Montpellier, Presses Universitaires de la Méditerranée, 2018',
        date: 'July, 2020',
        publisher: EPublisherNames.JournalOfOostColonialWriting,
        type: EPublicationType.BookReview,
        doi: 'https://www.tandfonline.com/doi/full/10.1080/17449855.2020.1786950',
      },
      {
        title:
          'Social media and the Covid-19 pandemic: Observations from Nigeria',
        authors: [
          EResearcherNames.Ngozika_Obi_Ani,
          EResearcherNames.Chinenye_Anikwenze,
          EResearcherNames.Mathias_Isiani,
        ].join(', '),
        summary:
          'The paper therefore interrogates the roles which social media play in either curtailing or aiding the spread of the news on the pandemic across the country',
        date: 'July, 2020',
        publisher: EPublisherNames.CogentArtsAndHumanities,
        type: EPublicationType.Article,
        doi: 'https://www.tandfonline.com/doi/full/10.1080/23311983.2020.1799483',
      },
    ],
  },
];
