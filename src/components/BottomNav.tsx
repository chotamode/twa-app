import styled from 'styled-components';

const BottomMenu = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f8f8f8;
    border-top: 1px solid #e7e7e7;
`;

const MenuButton = styled.button`
    background: none;
    border: none;
    font-size: 16px;
    color: #333;
`;

export const BottomNav = () => (
    <BottomMenu>
        <MenuButton>All</MenuButton>
        <MenuButton>My</MenuButton>
        <MenuButton>Settings</MenuButton>
    </BottomMenu>
);