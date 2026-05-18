"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import {  User, ImageIcon, Mail, Lock, PlaneIcon,Globe } from "lucide-react";
import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

const LoginPage = () => {

      const onSubmit = async(e) => {
        e.preventDefault();
    
          const formData = new FormData(e.currentTarget);
          const user = Object.fromEntries(formData.entries());
    
          const { data, error } = await authClient.signIn.email({
              email: user.email,
              password: user.password,
              callbackURL: ("/")
          })
    
          console.log(data);
          if (data) {
              toast.success("Logged in successfully ✨");
              redirect("/profile")
          }
          if(error){
            toast.error("invalid Ccredentials")
        }
    };
    
    return (
            <div className="min-h-screen bg-cyan-800 relative overflow-hidden flex items-center justify-center px-4 py-20">
      
      {/* Background Glow */}
      <div className="absolute size-96 bg-cyan-500/20 blur-3xl rounded-full -top-20 -left-20" />
      <div className="absolute size-96 bg-purple-500/20 blur-3xl rounded-full bottom-0 right-0" />

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:6rem_6rem]" />

      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-lg"
      >
        <div className="backdrop-blur-2xl bg-black/70 border border-white/20 rounded-[40px] p-10 shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="w-20 h-20 rounded-3xl bg-cyan-500 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-cyan-500/40"
            >
              <PlaneIcon className="text-white size-10" />
            </motion.div>
                        <div className="flex items-center">
                      <h1 className="text-2xl font-bold text-white flex items-center justify-center gap-3">
                                Log in to exploer more  <Globe size={ 30} />
            </h1>       
              </div>           
          
          </div>

          {/* Form */}
          <Form
            className="flex flex-col gap-6"
            render={(props) => <form {...props} />}
            onSubmit={onSubmit}
          >          

            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    value
                  )
                ) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label className="text-gray-200">Email</Label>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-black size-5 z-10" />

                              <Input
                                  name="email"
                  placeholder="john@example.com"
                  className="pl-12 rounded-2xl bg-white/80 border border-white/20 text-black w-full placeholder:text-black/50 h-14"
                />
              </div>

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >
              <Label className="text-gray-200">Password</Label>
       
              <div className="relative">
                <Lock className="absolute  left-4 top-1/2 -translate-y-1/2 text-black size-5 z-10" />

                              <Input
                                  name="password"
                                  type="password"
                  placeholder="Enter your password"
                  className="pl-12 rounded-2xl bg-white/80 border border-white/20 text-black w-full placeholder:text-black/50 h-14"
                />
              </div>

              <Description className="text-gray-400 text-xs">
                Must contain 1 uppercase letter and 1 number
              </Description>

              <FieldError />
            </TextField>

            {/* Buttons */}
            <div className="flex flex-col gap-4 pt-4">
              <motion.div whileTap={{ scale: 0.97 }}>
                <Button
                  type="submit"
                  className="w-full h-14 rounded-none bg-cyan-500 text-white text-lg font-semibold shadow-lg shadow-cyan-500/40"
                >
                                    <Check size={ 30} />
                  Login
                </Button>
              </motion.div>         
            </div>
          </Form>
        </div>
      </motion.div>
    </div>
    );
};

export default LoginPage;