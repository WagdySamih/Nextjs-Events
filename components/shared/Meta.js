import Head from "next/head"

const Meta = ({
  title,
  description,
  children
}) => {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta property="description" content={description} key="description" />}
      {children}
    </Head>
  )
}

export default Meta