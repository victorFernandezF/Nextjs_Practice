
export default function Home() {
/*   async function submit(e : FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/items", {method: 'POST', body: formData});
  }
  const data = await fetch('http://localhost:3000/api/items')
  const res = await data.json();
 */
return (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <form /* onSubmit={submit} */>
      <input type="text" name="name" /><br/><br/>
      <input type="text" name="comment" /><br/><br/>
      <input type="submit" name="ADD" value="Add" />
    </form>
  </main>
  )
}
