import { LoginContext } from "@/context/UserProvider"
import { useContext, useEffect, useState } from "react"
import Card from "./Card"
import Loading from "./Loading"

const Container = ({ filterLinks }) => {
  const { listenLinks } = useContext(LoginContext)
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    try {
      listenLinks((newLinks) => {
        const newlink = newLinks
        setLinks(newlink)
      })
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }, [])

   const filteredLinks =
    filterLinks === ""
      ? links
      : links.filter((link) => {
          return link.name.toLowerCase().includes(filterLinks.toLowerCase())
        })
  if (loading) return <Loading />
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 p-2 w-screen">
      {filteredLinks.map((link, index) => {
        const element = <Card link={link} key={index} />
        return element
      })}
    </div>
  )
}

export default Container
