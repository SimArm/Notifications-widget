import React from 'react';
import './GroupSection.scss';
import NotificationItem from '../NotificationItem';
import { FlexboxGrid } from 'rsuite';


const GroupSection = ({groupBy, data}) => {

    const Database = data || [];

    const dataFilter = (groupType , groupValue) => {
        return (
            Database.filter((item) => item.[groupType] == groupValue)
        );
    }

    const groupCondition = [...new Set(Database.map(item => item.[groupBy]))];

    return (
        <div className='show-grid'>
            
            <FlexboxGrid justify="space-around">
                {groupCondition.map((item, index)=>
                    {
                        return (
                        <FlexboxGrid.Item colspan={5}>
                        <div>{groupCondition[index].label}</div>
                                {
                                dataFilter(groupBy ,item).map((Notif,index) => {
                                    return (
                                        <NotificationItem
                                            ID = {Notif.ID}
                                            text = {Notif.text}
                                            type = {Notif.type}
                                            addInfo = {Notif.addInfo}
                                            read = {Notif.read}
                                        />
                                        )
                                    })
                                }    
                        </FlexboxGrid.Item>
                        )
                    }
                )}

            </FlexboxGrid>
        </div>
    );
}

export default GroupSection;