import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://lkcbpifmjivjmbludihc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrY2JwaWZtaml2am1ibHVkaWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NDgxMTMsImV4cCI6MjA3NTEyNDExM30.v2mZc9wBj42QFl3nsXx9vVIH7_-V1BFXOJ8p-FYlm9E"
)

export default supabase
