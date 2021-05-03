import {
  DropDownContainer,
  Icon,
  ExitIcon,
  DropDownWrapper,
  DropDownMenu,
  DropDownLink,
  BtnWrap,
  Button,
} from './styles';

const DropDown = ({ toggle, isOpen, data }) => {
  return (
    <DropDownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <ExitIcon onClick={toggle} />
      </Icon>

      <DropDownWrapper>
        <DropDownMenu>
          {data.map((item, index) =>
            index < data.length - 1 ? (
              <DropDownLink href={item.link} key={index}>
                {item.title}
              </DropDownLink>
            ) : (
              <a href='' key={index}>
                <BtnWrap>
                  <Button big dropDown>
                    {item.title}
                  </Button>
                </BtnWrap>
              </a>
            )
          )}
        </DropDownMenu>
      </DropDownWrapper>
    </DropDownContainer>
  );
};

export default DropDown;
