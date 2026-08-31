import { Button, keys, Stack, Text, Textarea, TextInput } from '@mantine/core'
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { useLoaderData } from 'react-router';
import type { loader } from '~/routes/layout';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
  botcheck: boolean;
}

export default function ContactForm() {
  const { key } = useLoaderData<typeof loader>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormProps>({
    initialValues: {
      name: '',
      email: '',
      message: '',
      botcheck: false,  // Honeypot
    },
    validate: {
      name: (value) => (value.trim().length > 0 ? null : 'Name is required'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value) => (value.trim().length > 0 ? null : 'Message is required'),
    },
  });

  const handleSubmit = async (values: ContactFormProps) => {
    setIsSubmitting(true);

    // Preventy bot for sending
    if (values.botcheck) {
      console.log('Aha! a bot bot');
      return; 
    }

    //  Prepare the value to be send
    const formData = new FormData();
    formData.append("access_key", key ); 
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);
    

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset(); 
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="md">
        <input 
          type="checkbox" 
          style={{ display: 'none' }} 
          {...form.getInputProps('botcheck', { type: 'checkbox' })}
        />
        <TextInput 
          placeholder="Your name" 
          radius="md" 
          styles={{ input: { backgroundColor: '#1e293b', border: 'none', color: 'white' } }}
          {...form.getInputProps('name')}
        />
        <TextInput 
          placeholder="Your email" 
          radius="md" 
          styles={{ input: { backgroundColor: '#1e293b', border: 'none', color: 'white' } }}
          {...form.getInputProps('email')}
          
        />
        <Textarea 
          placeholder="Your message..." 
          radius="md" 
          minRows={3}
          styles={{ input: { backgroundColor: '#1e293b', border: 'none', color: 'white' } }}
          {...form.getInputProps('message')}
        />
        <Button
          type="submit"
          color="teal.6"
          radius="md"
          fullWidth
          loading={isSubmitting} 
          disabled={isSuccess}
        >
          {isSuccess ? 'Sent Successfully!' : 'Send Message'}
        </Button>
      </Stack>
    </form>
  )
}
