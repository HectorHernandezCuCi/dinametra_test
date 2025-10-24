const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between">
    <span className="text-space-light/70">{label}:</span>
    <span className="text-space-light font-medium">{value}</span>
  </div>
);

export default InfoRow;