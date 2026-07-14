// Service categories on the client Home screen — 3D icons exported from the Figma file.
export const SERVICES = [
  { key: 'surveying', label: 'Surveying &\nMapping', icon: 'map', image: require('../../assets/services/surveying.png') },
  { key: 'inspection', label: 'Inspection\nServices', icon: 'search', image: require('../../assets/services/inspection.png') },
  { key: 'security', label: 'Security &\nSurveillance', icon: 'videocam', image: require('../../assets/services/security.png') },
  { key: 'emergency', label: 'Emergency & Public\nSafety', icon: 'medkit', image: require('../../assets/services/emergency.png') },
  { key: 'environment', label: 'Environmental\nServices and\nAgriculture', icon: 'leaf', image: require('../../assets/services/environment.png') },
  { key: 'construction', label: 'Construction', icon: 'construct', image: require('../../assets/services/construction.png') },
  { key: 'media', label: 'Media &\nMarketing', icon: 'camera', image: require('../../assets/services/media.png') },
  { key: 'specialized', label: 'Specialized\nServices', icon: 'cog', image: require('../../assets/services/specialized.png') },
];

export const ACTIVE_MISSIONS = [
  {
    key: 'lekki',
    title: 'Lekki Estate Survey',
    pilot: 'Oluwaseun A.',
    meta: 'Lekki, Phase 1 • June 24, 2026',
    status: 'IN PROGRESS',
    statusStyle: 'text',
    thumbnail: require('../../assets/missions/lekki.png'),
  },
  {
    key: 'pipeline',
    title: 'Pipeline Inspection',
    pilot: 'John Doe',
    meta: 'Ikeja Industrial • Oct 25, 2026',
    status: 'PENDING',
    statusStyle: 'pill',
    thumbnail: require('../../assets/missions/pipeline.png'),
  },
];
