import { Menu, Dropdown } from 'semantic-ui-react';

export const Panel = ({ handleMove, handleAdd, handleRemove }) => {
  return (
    <div id="panel">
      <Menu>
        <Menu.Menu position='left'>
          <Dropdown
            item
            text='Move'
            upward={true}
            options={[
              { key: 1, text: 'North', onClick: () => handleMove('North') },
              { key: 2, text: 'East', onClick: () => handleMove('East') },
              { key: 3, text: 'South', onClick: () => handleMove('South') },
              { key: 4, text: 'West', onClick: () => handleMove('West') }
            ]}
          />
          <Dropdown
            item
            text='Turn'
            upward={true}
            options={[
              { key: 1, text: 'Clockwise', value: 1 },
              { key: 2, text: 'Counter-Clockwise', value: 2 },
            ]}
          />
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Dropdown
            item
            text='Add'
            upward={true}
            options={[
              { key: 1, text: 'Box', onClick: () => handleAdd({ type: 'Cube', position: [0,0,0]}) },
              { key: 2, text: 'Cylinder', onClick: () => handleAdd({ type: 'Cylinder', position: [0,0,0]}) },
              { key: 3, text: 'Sphere', onClick: () => handleAdd({ type: 'Sphere', position: [0,0,0]}) }
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