"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { Edit, Edit3, Save } from "lucide-react";
import { useState } from "react";

export function EditDestinationForm({ destination }) {
  const [open, setOpen] = useState(false);

  const {
        _id,
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = destination;
  
  const onSubmit = async (e) => {
      e.preventDefault();
      
      const form = e.currentTarget;

    const formData = new FormData(form);
    const destination = Object.fromEntries(formData.entries());
    console.log(destination);   

    const res= await  fetch(`http://localhost:5000/destination/${_id}`, {
        method: "PATCH",
        headers: {
          'content-type': "application/json"
        },
        body: JSON.stringify(destination)
    })
      const data = await res.json();
    console.log(data);
    
    
  setOpen(false);

  };

    


  return (
    <>
     
      <Modal open={open} onOpenChange={setOpen}  key={open.toString()}>
       <Button  onPress={() => setOpen(true)} variant="outline" className="border-4 border-cyan-600 md:text-lg md:p-4 ">
        <Edit /> Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Edit3 className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Info</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and update the destinaiton.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="p-10 space-y-8 space-x-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                      <TextField 
                      defaultValue={destinationName} name="destinationName" isRequired>
                        <Label>Destination Name</Label>
                        <Input
                          placeholder="Bali Paradise"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <TextField defaultValue={country} name="country" >
                      <Label>Country</Label>
                      <Input placeholder="Indonesia" className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    {/* Category - Updated Select Component */}
                    <div>
                      <Select
                        name="category"                       
                        className="w-full"
                        placeholder="Select category"
                      >
                        <Label>Category</Label>
                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Beach" textValue="Beach">
                              Beach
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Mountain" textValue="Mountain">
                              Mountain
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="City" textValue="City">
                              City
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Adventure" textValue="Adventure">
                              Adventure
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Cultural" textValue="Cultural">
                              Cultural
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Luxury" textValue="Luxury">
                              Luxury
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Price */}
                    <TextField defaultValue={price} name="price" type="number" isRequired>
                      <Label>Price (USD)</Label>
                      <Input
                        type="number"
                        placeholder="1299"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField defaultValue={duration} name="duration" isRequired>
                      <Label>Duration</Label>
                      <Input
                        placeholder="7 Days / 6 Nights"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                      <TextField defaultValue={departureDate} name="departureDate" type="date" isRequired>
                        <Label>Departure Date</Label>
                        <Input type="date" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                      <TextField defaultValue={imageUrl} name="imageUrl" isRequired>
                        <Label>Image URL</Label>
                        <Input
                          type="url"
                          placeholder="https://example.com/bali-paradise.jpg"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField name="description" isRequired defaultValue={description}>
                        <Label>Description</Label>
                        <TextArea
                          placeholder="Describe the travel experience..."
                          className="rounded-3xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  {/* Buttons */}

                 <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
                    <Button type="submit" 
                     
                    variant="outline"
                    
                    className="  bg-cyan-500 text-white"> <Save/> Save </Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    </>
  
  );
}
