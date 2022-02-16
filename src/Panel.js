import { Menu, Dropdown } from 'semantic-ui-react';

export const Panel = ({ handleMove, handleTurn, handleAdd, handleRemove }) => {
  return (
    <div id="panel">
      <Menu>
        <Menu.Menu position='left'>
          <Dropdown
            item
            text='Move'
            upward={true}
            options={[
              { key: 1, text: 'Up', onClick: () => handleMove('Up') },
              { key: 2, text: 'Right', onClick: () => handleMove('Right') },
              { key: 3, text: 'Down', onClick: () => handleMove('Down') },
              { key: 4, text: 'Left', onClick: () => handleMove('Left') }
            ]}
          />
          <Dropdown
            item
            text='Turn'
            upward={true}
            options={[
              { key: 1, text: 'Clockwise', onClick: () => handleTurn('CW') },
              { key: 2, text: 'Counter-Clockwise', onClick: () => handleTurn('CCW') },
            ]}
          />
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Dropdown
            item
            text='Add'
            upward={true}
            options={[
              { key: 1, text: 'Cube', onClick: () => handleAdd('Cube') },
              { key: 2, text: 'Cone', onClick: () => handleAdd('Cone') },
              { key: 3, text: 'Sphere', onClick: () => handleAdd('Sphere') },
              { key: 4, text: 'Cylinder', onClick: () => handleAdd('Cylinder') },
            ]}
          />
          <Dropdown
            item
            text='Remove'
            upward={true}
            options={[
              { key: 1, text: 'Remove Current', onClick: () => handleRemove(false) },
              { key: 2, text: 'Remove All', onClick: () => handleRemove(true) },
            ]}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};