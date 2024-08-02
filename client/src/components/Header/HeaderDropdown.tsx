type Props = {isVisible: boolean}

const HeaderDropdown = (props: Props) => {
  return (
    <div>
    {props.isVisible && (
      <ul>
        <li>My accounnt</li>
        <li>Create a group</li>
        <li>Log out</li>
      </ul>
    )}
  </div>
  );
};

export default HeaderDropdown;