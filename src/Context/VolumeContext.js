import { useState, createContext } from "react";

const VolumeContext = createContext()

let lastvolume = 80;
function VolumeProvider({ children }) {
    const [isMuted, setMuted] = useState(false)
    const [volumeValue, setVolume] = useState(80)

    const hanldeVolumeChange = (value) => {
        const newvalue = 100 - value
        if (newvalue) {
            setVolume(newvalue)
            setMuted(false)
        }
        else {
            setVolume(newvalue)
            setMuted(true)
        }
    }

    const toogleVolume = () => {
        if (isMuted) {
            setMuted(false)
            setVolume(lastvolume)
        } else {
            setMuted(true)
            lastvolume = volumeValue
            setVolume(0)
        }
    }

    const values = {
        isMuted,
        volumeValue,
        hanldeVolumeChange,
        toogleVolume
    }
    return (
        <VolumeContext.Provider value={values}>
            {children}
        </VolumeContext.Provider>
    );
}

export { VolumeProvider, VolumeContext };