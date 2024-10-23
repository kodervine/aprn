import NgoziObiani from '@/assets/images/ngozika-obiani.jpeg';
import PaulObiani from '@/assets/images/paul-obiani.jpeg';
import ChijiokeOnah from '@/assets/images/chijioke-onah.jpeg';
import MathiasIsiani from '@/assets/images/mathias-isiani.jpg';
import OdinakaEze from '@/assets/images/odinaka-eze.jpg';
import SochimaOkafor from '@/assets/images/sochima-okafor.png';
import { EResearcherNames } from '@/services/types/publications';

export const researchers = [
  {
    name: `Dr. ${EResearcherNames.Ngozika_Obi_Ani}`,
    title: 'Senior Lecturer, Ph.D, M.A, B.A',
    image: NgoziObiani,
    interests: '',
    research:
      'Social History, Governance, Comparative Analysis, Ethnicity, Political Participation, Cultural Studies, Election Studies',
  },
  {
    name: `Prof. ${EResearcherNames.Paul_Obi_Ani}`,
    title: 'Professor (Associate), Ph.D, M.A, B.A ',
    image: PaulObiani,
    interests: '',
    research:
      'Social History, 20th Century History, Historiography, 19th Century History, Modern History, Historical Analysis, Contemporary History, World History, Ethnicity, Cultural Studies, Comparative History',
  },
  {
    name: EResearcherNames.Mathias_Isiani,
    title: 'Ph.D (In view), M.A, B.A, Economic Historian',
    image: MathiasIsiani,
    // image: 'https://www.svgrepo.com/show/3130/user.svg',
    interests: '',
    research:
      'Sociology, demography, cultural studies, oral history, urban planning, and geography',
  },
  {
    name: EResearcherNames.Chijioke_Onah,
    title: 'Ph.D (In view), M.A, B.A, African and African Diaspora Literature',
    image: ChijiokeOnah,
    interests: '',
    research:
      'African and African Diaspora Literature, Anglophone Postcolonial Literature, Environmental Humanities, Global Black Atlantic Ecologies, Anglophone Postcolonial Literature, Trauma/Memory Studies, New Media Studies, Terrorism Studies',
  },
  {
    name: EResearcherNames.Odinaka_Eze,
    title: 'Ph.D (In view), M.A, B.A, Health Historian',
    image: OdinakaEze,
    interests: '',
    research:
      'Mobility, health, diseases, NGO, Africa, colonial, postcolonial, environmental justice, public health, health workers, particles',
  },
  {
    name: EResearcherNames.Sochima_Okafor,
    title: 'M.A (In view), B.A',
    image: SochimaOkafor,
    interests: '',
    research: 'Colonialism, Nigeria, Colonial Films, Science and Technology',
  },
];
