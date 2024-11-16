import { DeliveryPartner } from '../types';

export const getActivePartners = (partners: DeliveryPartner[]) => {
  return partners.filter((partner) => partner.status === 'active');
};

export const getPartnerByArea = (partners: DeliveryPartner[], area: string) => {
  return partners.filter((partner) => partner.areas.includes(area));
};

export const getPartnerMetrics = (partners: DeliveryPartner[]) => {
  return partners.map((partner) => ({
    name: partner.name,
    rating: partner.metrics.rating,
    completedOrders: partner.metrics.completedOrders,
  }));
};
