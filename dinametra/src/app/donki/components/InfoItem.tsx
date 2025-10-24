
const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-space-light/70 text-xs">{label}</div>
    <div className="text-space-light font-medium">{value}</div>
  </div>
);

export default InfoItem;