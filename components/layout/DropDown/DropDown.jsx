import {
  DropDownContainer,
  Icon,
  ExitIcon,
  DropDownWrapper,
  DropDownMenu,
  DropDownLink,
} from './styles';

const DropDown = ({ toggle, isOpen, data }) => {
  return (
    <DropDownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <ExitIcon onClick={toggle} />
      </Icon>

      <DropDownWrapper>
        <DropDownMenu>
          {data.map((item, index) => (
            <DropDownLink href={item.link} key={index}>
              {item.title}
            </DropDownLink>
          ))}
        </DropDownMenu>
      </DropDownWrapper>
    </DropDownContainer>
  );
};

export default DropDown;
