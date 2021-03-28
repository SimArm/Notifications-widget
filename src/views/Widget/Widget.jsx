import React from 'react';
import {useHistory} from 'react-router-dom';
import './Widget.scss';
import NotificationItem from '../../components/NotificationItem';
import { Database } from '../../constants/data';
import { Notification, Badge, Icon, IconButton, FlexboxGrid } from 'rsuite';


const Widget = () => {
  
    const Data = Database || [];

    let counter = 0;
    for (const obj of Data) {
        if (obj.read === false) counter++;
    }

    const history = useHistory();
    const routeOnClick = () =>{ 
        history.push('/home');
        Notification.closeAll();
    };
      
    const open = (placement) => {
        Notification.open({
          title: <div className='show-grid'>
                    <FlexboxGrid justify='space-between'>
                        <FlexboxGrid.Item><Badge content={counter}><p onClick={routeOnClick}>Notifications</p></Badge></FlexboxGrid.Item>
                        <FlexboxGrid.Item><IconButton icon={<Icon icon="right" />} placement="right" onClick={routeOnClick}/></FlexboxGrid.Item>
                    </FlexboxGrid>          
                </div>,
          duration: 0,
          placement,
          description: (
              <div className='notificationsWrapper'>
                  { Data.map((Notif) => {
                     return (
                        <NotificationItem
                            ID = {Notif.ID}
                            text = {Notif.text}
                            type = {Notif.type}
                            addInfo = {Notif.addInfo}
                        />
                        )
                     })
                    }
              </div>
          )
        });
    }

    return (
        <div className="widgetWrapper">
            {open('topStart')}
        </div>
    );
}

export default Widget;