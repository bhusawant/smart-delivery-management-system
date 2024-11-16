import React from 'react';
import { DeliveryPartner } from '../../types/index';
import '../../styles/partner.css';  
import dynamic from "next/dynamic";


type PartnerListProps = {
  partners: DeliveryPartner[];
  onDelete: (partnerId: string) => void;
};

const PartnerList: React.FC<PartnerListProps> = ({ partners, onDelete }) => {
  return (
    <div className="partner-list">
      <h2>Partners</h2>
      <ul>
        {partners.map((partner) => (
          <li key={partner._id}>
            <span>{partner.name} - {partner.status}</span>
            <button onClick={() => onDelete(partner._id!)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default dynamic (() => Promise.resolve(PartnerList), {ssr: false})

