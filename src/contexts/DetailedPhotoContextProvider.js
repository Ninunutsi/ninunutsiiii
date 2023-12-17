import { createContext, useContext, useState } from "react";


const DetailedPhotoContext = createContext(null)

const DetailedPhotoContextProvider = ({children}) => {

    const [mainPhoto, setMainPhoto] = useState(null)
    const [currentId, setCurrentId] = useState(null)

    const contextValue = {
        mainPhoto,
        setMainPhoto,
        currentId,
        setCurrentId
      }

    return <DetailedPhotoContext.Provider value={contextValue}>
        {children}
    </DetailedPhotoContext.Provider>
}
    export const useDetailedPhotoContext = () => {
        const contextValue = useContext(DetailedPhotoContext)
        return contextValue
    }

    export default DetailedPhotoContextProvider