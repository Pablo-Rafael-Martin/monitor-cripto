import { Button, Menu } from "antd";
import { Color } from "antd/es/color-picker";
import Link from "next/link";
import React from 'react';


function AppMenu() {
    const menuItems = [
        { label: <Button type="primary" href={"/"}>Home</Button>, key: 1 },
        { label: <Button type="primary" href={'/cadastro'}>Cadastre-se</Button>, key: 2 }
    ];

    return (
        <Menu 
        mode="horizontal" 
        items={menuItems} 
        style={{backgroundColor: 'transparent'}}
        />
    );
}

export default AppMenu;