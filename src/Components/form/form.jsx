import './style.css'
import { Input, Stack } from '@chakra-ui/react'
import { Button, Grid } from "@nextui-org/react";
import { GrClose } from 'react-icons/gr'

export default function Card() {






  return (
    <div className=" bg-gray-200 w-[100rem] h-[750px] rounded-[33px] flex-col gap-6 justify-between items-center ">
      <div className="flex justify-center gap-2 p-8">
        <button className=" rounded-none bg-zinc-50 h-[78px] w-[219px] border-r-4 border-b-4 border-black p-2">
          Social Links
        </button>

        <button className=" rounded-none bg-zinc-50 h-[78px] w-[219px] border-r-4 border-b-4 border-black p-2">
          Other Links
        </button>
        <button className=" rounded-none bg-zinc-50 h-[78px] w-[219px] border-r-4 border-b-4 border-black p-2">
          Product Links
        </button>
      </div>
      <div className="flex justify-center">
        <Stack spacing={4}>
          <Input
            className=" w-[555px] h-20 "
            htmlSize={4}
            variant="filled"
            placeholder="          Social Media Platform"
          />
          <br />
          <Input
            className=" w-[555px] h-20 "
            htmlSize={4}
            variant="filled"
            placeholder="          Social Media Links"
          />
        </Stack>
      </div>
      <br />
      <br />
      <div className="flex justify-center">
        <Grid>
          <Button size={"xl"} color="success" rounded>
            ADD
          </Button>
        </Grid>
      </div>
      <div className=' grid-flow-col content-center mx-[140px]'>
        <div className='flex items-center justify-between w-[500px] h-16 bg-zinc-400 m-8 rounded-md bg-transparent px-7'>
          <h4>YouTube</h4>
          <GrClose />
        </div>
        <div className='flex items-center justify-between  w-[500px] h-16 bg-zinc-400 m-8 rounded-md bg-transparent px-7'>
          <h4>YouTube</h4>
          <GrClose />
        </div>
      </div>
    </div>
  );
}
