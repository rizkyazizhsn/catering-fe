export async function getAllCategories() {
  try {
    const res = await fetch(`${process.env.HOST_API}/products/category-list`, {
      method: 'GET',
      cache: 'no-cache'
    })

    return res.json()
  } catch (error) {
    return error
  }
}