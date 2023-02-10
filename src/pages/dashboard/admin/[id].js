import CardCheck from "@/components/Admin/CardCheck"
import { firestore } from "@/firebase/admin"

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "fg3dZjKDOmnk18CFLKYy" } }],
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const { id } = params
  return firestore
    .collection("linksUser")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data()
      const id = doc.id
      const { createdAt } = data
      const props = {
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      }
      return { props: { props }, revalidate: 3600 }
    })
}

const index = ({ props }) => {
  return (
    <>
      <CardCheck {...props} />
    </>
  )
}

export default index
