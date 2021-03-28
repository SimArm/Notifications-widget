import React, { useState } from 'react'; 
import './NotificationItem.scss';
import { Message, Input, InputGroup, Icon, IconButton } from 'rsuite';

const NotificationItem = ({ID, text, type, addInfo, read,}) => {

    const [isHidden, setHidden] = useState(true);
    const [isClicked, setClicked] = useState(false);
    const [isRead, setRead] = useState(read);
    const [linkValue, setLinkValue] = useState('');
    const [linkInput, setLinkInput] = useState('');
    const [isLinkAdded, setIsLinkAdded] = useState(false);
    const classes = `${isHidden ? 'hidden' : 'show'}`;

    const toggleHidden = () => {
        setHidden(isClicked ? true : false);
    }

    const clickedToggle = () => {
        setClicked(!isClicked);
        toggleHidden(isClicked ? true : false);
    }

    const updateInputLink = (value) => {
        setLinkInput(value);
    }

    const addLink = () => {
        if (linkInput !== '') { 
            setLinkValue(linkInput);
            setIsLinkAdded(true);
        } 
    }

    const inputStyles = {
        width: 180,
        marginBottom: 10,
        size: 'md'
      };

    return (
        <div 
            Id={`Notification${ID}`} 
            className="notificationWrapper"
        >
            <Message
                showIcon
                type={type}
                title={<div onClick={clickedToggle} 
                className='titleDiv'>{text}</div>}
                className={isRead && 'muted'}
                description={
                    <div className={classes}>
                        <span onClick={() => setRead(!isRead)} className='readBtn'>Mark as read { isRead ? <Icon icon="check-square-o"/> : <Icon icon="square-o"/>}</span>
                        <p>{addInfo}</p>
                        {
                            isLinkAdded === true ?
                            <div>
                                <a href={linkValue} target='_blank' className='url'>{linkValue}</a>
                                <IconButton icon={<Icon icon='link' />} onClick={() => setIsLinkAdded(false)} />
                            </div> 
                            : 
                            <InputGroup style={inputStyles}>                                            
                            <Input size='xs'placeholder='Add link' value={linkInput} onChange={updateInputLink}/>
                            <InputGroup.Button onClick={() => addLink()}>
                                <Icon icon="link"/>
                            </InputGroup.Button>
                            </InputGroup>
                        }                       
                    </div>
                }
            />
        </div>
    );
}

export default NotificationItem;