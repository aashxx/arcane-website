import { NON_TECH_EVENTS, TECH_EVENTS } from '@/utils/constants';
import axios from 'axios';
import dayjs from 'dayjs';
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export const RegisterContext = createContext();

const RegisterState = ({ children }) => {

    const [participant, setParticipant] = useState({
        fullName: "",
        college: "",
        email: "",
        phone: "",
        degree: "",
        year: "",
        food: "No",
        emailVerified: false,
        events: [],
        timestamp: dayjs().format('DD/MM/YYYY')
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(participant.email) {
            setParticipant({
                ...participant,
                emailVerified: false,
                events: []
            });
        }
    }, [participant.email]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const validatePersonalDetails = () => {
        if (!participant.fullName || !participant.email || !participant.phone || !participant.college || !participant.degree || !participant.year) {
          toast.error("All personal details are required");
          return false;
        }
        if (!participant.emailVerified) {
          toast.error("Email not verified");
          return false;
        }
        return true;
    };

    const calculatePrice = () => {
        const selectedTechEvents = participant.events.filter(event => TECH_EVENTS.some(techEvent => techEvent.name === event));
        const selectedNonTechEvents = participant.events.filter(event => NON_TECH_EVENTS.some(nonTechEvent => nonTechEvent.name === event));
      
        let price = 150;

        if (selectedTechEvents.length > 0 && selectedNonTechEvents.length > 0) {
          price = 200;
        }

        if (participant.food !== "No") {
          price += 50;
        }
      
        return price;
    };

    const confirmParticipantRegistration = async () => {
        try {
            setLoading(true);
            await axios.post("https://arcane-website-backend.vercel.app/api/registration/confirm-registration", { participant }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            toast.success("Registration Successfull");
        } catch (error) {
            toast.error("Registration Failed");
            console.error("Error registering participant", error);
        } finally {
            setParticipant({
                fullName: "",
                college: "",
                email: "",
                phone: "",
                degree: "",
                year: "",
                food: "No",
                emailVerified: false,
                events: []
            });
            setLoading(false);
        }
    }

    return (
        <RegisterContext.Provider value={{ participant, setParticipant, calculatePrice, confirmParticipantRegistration, loading, setLoading, formatTime, validatePersonalDetails }}>
            {children}
        </RegisterContext.Provider>
    )
}

export default RegisterState;