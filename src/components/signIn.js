
import { signIn } from "@/app/auth" 
import { login } from "@/app/actions" 
import { Form,Button } from "antd"

import FormItem from "antd/es/form/FormItem"
 
export function SignIn() {
  return (
    <Form
    //   action={async (formData) => {
    //     "use server"
    //     await signIn("credentials", formData)
    //   }}  
        onFinish={login} 
    >
      <FormItem name="email" label="email">
        <input name="email" type="email" />
      </FormItem>
      <FormItem name="password" label="password">
        <input name="password" type="password" />
      </FormItem>
      <Button htmlType="submit">Sign In</Button>
    </Form>
  )
}