//  هنا هيكون طريقه التعامل مع الباك اند كفرونت اند
/*
1= محتاج databaseبتيجي ع شكل Api
اي هوا ال   api
api = application programming interface
application programming =   كود مكتوب ب لغه الباك اند سواء  php || node || python
interface =  الوسيط  بين الداتا بيز والتعامل معاها
طريقه التعامل هيكون عن طريق ال request
1 : add data

2 : edit data
3 : update data
4 : delete data
5 : get data
{
 التحكم ف ال  api
 1  : get   || post : نشاء  || patch/put :  والفرق بينهم || Delete
}
end point : /users
اي هوا ال  http || https
protocol =  شويه قواعد ع تعرف تتعامل مع الويب او الانترنت نفسه

http request  مش بيقبل غير  string
علشان احول الداتا ل سترينج او العكس
any data type => serialization => string

string => deserialization  =>[]

*/

/* used Chakra ui
INSTALL : npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
NPM : NODE PACKAGE MANGER
*/


import { Box, Image } from '@chakra-ui/react'
const AxiosNpm = () => {

  return (
   <Box bg='#333' rounded={10} w='100%' p={4} color='white' display={"flex"}>
<Image src='' alt='image' />
</Box>
  )
}

export default AxiosNpm