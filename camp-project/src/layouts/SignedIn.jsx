import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  Image,
  Menu,
  MenuMenu,
} from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (

    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ntv.com.tr%2Fgaleri%2Fsanat%2Fcorona-virus-temali-sokak-resimleri%2CTzXC_BQV8k6oxfRv4pZYkQ&psig=AOvVaw3lyrBFRrdF-dYHHZKkwVC1&ust=1623351558173000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjPvvmdi_ECFQAAAAAdAAAAABAD"
        />
        <Dropdown pointing="top left" text="Emirhan">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
