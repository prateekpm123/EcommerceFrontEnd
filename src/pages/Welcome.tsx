import { useProjectContext } from "@/contexts/ProjectContext"

export default function Welcome() {
  const projectData =  useProjectContext();
  const email = projectData.userContext?.email

  return (
    <div className="text-3xl text-gray-100">Welcome {email}</div>
  )
}
