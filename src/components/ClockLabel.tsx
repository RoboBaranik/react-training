import styles from './ClockLabel.module.scss';
const ClockLabel = ({ labelName }: { labelName: string }) => {
  const labelToPosition = (label: string) => {
    const labelNum = Number.parseInt(label);
    if (labelNum < 1 || labelNum > 12) {
      return null;
    }
    return labelNum * 30;
  };
  return (
    <div
      className={styles.label}
      style={{ transform: `translateY(50%) rotate(${labelToPosition(labelName)}deg) translateY(-50%)` }}
    >
      <span>{labelName}</span>
    </div>
  );
};

export default ClockLabel;
