import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home')
  }, [navigate])

  return(
    <h1>Wait</h1>
  )
}

export default NotFoundPage