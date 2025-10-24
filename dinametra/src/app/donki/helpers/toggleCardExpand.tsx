interface ToggleCardExpandProps {
    expandedCard: number | null;
    setExpandedCard: React.Dispatch<React.SetStateAction<number | null>>;
    index: number;
}

const toggleCardExpand = ({
    expandedCard,
    setExpandedCard,
    index,
}: ToggleCardExpandProps) => {
    setExpandedCard(expandedCard === index ? null : index);
};

export default toggleCardExpand;
