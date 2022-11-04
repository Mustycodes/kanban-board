type AddItemButtonProps = {
  dark?: boolean;
  onClick(): void;
};

export const AddItemButton: React.FC<AddItemButtonProps> = ({
  children,
  dark,
  onClick,
}) => {
  return (
    <button
      id="add-item-btn"
      onClick={onClick}
      className={`${
        dark ? "text-black" : "text-white"
      } w-full max-w-[300px] text-left py-2.5 px-3 bg-[#ffffff3d] hover:bg-[#ffffff64] transition-colors duration-75 ease-in`}
    >
      {children}
    </button>
  );
}
