import React, { useState } from 'react';
import "./SendTweet.scss";
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ModalContainer } from '../ModalContainer/ModalContainer';
import { FormSendTweet } from '../FormSendTweet/FormSendTweet';
import moment from 'moment';
import { TWEETS_STORAGE } from '../../assets/utils/constants';


export const SendTweet = (props) => {
    const {setToastProps, allTweets} = props;
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    }

    const closeModal = () => {
        setIsOpenModal(false);
    }

    const sendTweet = (e, formValue) => {
        e.preventDefault();
        const { name, tweet} = formValue;
        let allTweetsArray = [];

        if(allTweets) {
            allTweetsArray = allTweets;
        }

        if(!name || !tweet) {
            setToastProps({
                open: true,
                text: "Error todos los campos son obligatorios"
            })
        }else {
            formValue.time = moment();
            allTweetsArray.push(formValue);
            localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
            setToastProps({
                open: true,
                text: "Enviado correctamente"
            })
            closeModal();
        }
        allTweetsArray =[];
    }

    return (
        <div className="send-tweet">
            <Fab
                className="send-tweet__open-modal"
                color="primary"
                aria-label="add"
                onClick={openModal}
            >
                <AddIcon />
            </Fab>

            <ModalContainer
                isOpenModal={isOpenModal}
                closeModal={closeModal}
            >
               <FormSendTweet 
                   sendTweet={sendTweet}
               />
            </ModalContainer>
        </div>
    )
}