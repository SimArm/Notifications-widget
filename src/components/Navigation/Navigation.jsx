import React, { useState } from 'react';
import './Navigation.scss';
import { Database } from '../../constants/data';
import { Sidebar, Dropdown, Nav, Icon, Sidenav, Tree, CheckPicker, Toggle} from 'rsuite';

const Navigation = ({FilterValue, SortingValue, GroupToggle, GroupingValue}) => {

    const Data = Database || [];

    const filterData = [{label:'info', value:'info'},{label:'warning', value:'warning'},{label:'danger', value:'error'},{label:'success', value:'success'}];
    const [expand, setExpand] = useState(true);

    const headerStyles = {
        padding: 18,
        fontSize: 16,
        height: 56,
        background: '#595959',
        color: ' #fff',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      };

      const setFilterValue = (filterData) => {
        FilterValue(filterData);
      }

      const setSortingValue = (sortingData) => {
        SortingValue(sortingData);
      }

      const setGroupToggle = (groupValue) => {
        GroupToggle(groupValue);
      }

      const setGroupingValue = (groupingData) => {
        GroupingValue(groupingData);
      }

    return (
        <Sidebar  style={{ display: 'flex', flexDirection: 'column'}}
        width={expand ? 260 : 56}
        collapsible> 
            <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                <Sidenav.Header>
                    <div className='sidenavHeader' style={headerStyles}>
                    <span style={{ marginLeft: 12 }}>Display Parameters</span>
                    </div>
                </Sidenav.Header>
                <Sidenav.Body>
                    <Nav>
                    <Nav.Item icon={<Icon icon="filter" />}>Filter:
                        <CheckPicker
                            block='true'
                            data={filterData}
                            appearance="subtle"
                            searchable={false}
                            style={{ width: 224 }}
                            onChange={(value, event) => setFilterValue(value)}
                        />
                    </Nav.Item>
                    <Dropdown
                        eventKey="3"
                        trigger="hover"
                        title="Sort by"
                        icon={<Icon icon="sort-amount-asc" />}
                        placement="rightStart"
                    >
                        <Dropdown.Item eventKey="3-1" onClick={() => setSortingValue('ID')}>Id</Dropdown.Item>
                        <Dropdown.Item eventKey="3-2" onClick={() => setSortingValue('type')}>Type</Dropdown.Item>
                        <Dropdown.Item eventKey="3-3" onClick={() => setSortingValue('text')}>App</Dropdown.Item>
                        <Dropdown.Item eventKey="3-4" onClick={() => setSortingValue('read')}>active</Dropdown.Item>
                    </Dropdown>
                    <Dropdown
                        eventKey="4"
                        trigger="hover"
                        title={
                            <span>
                                Group  
                                <Toggle onChange={(value) => setGroupToggle(value)}/>
                            </span>
                        }
                        icon={<Icon icon="group" />}
                        placement="rightStart"
                    >
                        <Dropdown.Item eventKey="4-1" onClick={() => setGroupingValue('type')}>Type</Dropdown.Item>
                        <Dropdown.Item eventKey="4-2" onClick={() => setGroupingValue('text')}>App</Dropdown.Item>
                        <Dropdown.Item eventKey="4-3" onClick={() => setGroupingValue('read')}>active</Dropdown.Item>
                    </Dropdown>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </Sidebar>
    );
}

export default Navigation;