import { PublicLayout } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, ArrowLeft, User, GraduationCap, Briefcase, FileText } from "lucide-react";

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Education", icon: GraduationCap },
  { id: 3, title: "Interests", icon: Briefcase },
  { id: 4, title: "Statement", icon: FileText },
];

const educationStatuses = [
  "Undergraduate - 1st Year",
  "Undergraduate - 2nd Year",
  "Undergraduate - 3rd Year",
  "Undergraduate - Final Year",
  "Postgraduate - 1st Year",
  "Postgraduate - Final Year",
  "Recently Graduated",
];

const areasOfInterest = [
  "Urban Planning & Development",
  "Public Health",
  "Environment & Sustainability",
  "IT & e-Governance",
  "Finance & Accounts",
  "Education & Literacy",
  "Water Supply & Sewage",
  "Sanitation & Waste Management",
  "Smart City Initiatives",
  "Traffic Management",
  "Legal Affairs",
  "Sports & Youth Development",
];

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    address: "",
    emergencyContact: "",
    emergencyPhone: "",
    educationStatus: "",
    university: "",
    program: "",
    specialization: "",
    currentYear: "",
    interests: [] as string[],
    technicalSkills: "",
    experience: "",
    sop: "",
    availability: false,
  });

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : prev.interests.length < 3
        ? [...prev.interests, interest]
        : prev.interests,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <PublicLayout>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground">Apply for IWM Program</h1>
            <p className="text-muted-foreground mt-2">
              Complete the registration form to apply for Batch 16
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    currentStep === step.id
                      ? "bg-primary text-primary-foreground"
                      : currentStep > step.id
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <step.icon className="w-4 h-4" />
                  <span className="text-sm font-medium whitespace-nowrap">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-2 ${currentStep > step.id ? "bg-emerald-500" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
              {/* Step 1: Personal Info */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Personal Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => updateFormData("fullName", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number *</Label>
                      <Input
                        id="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) => updateFormData("mobile", e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth *</Label>
                      <Input
                        id="dob"
                        type="date"
                        value={formData.dob}
                        onChange={(e) => updateFormData("dob", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Permanent Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => updateFormData("address", e.target.value)}
                      placeholder="Enter your complete address"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                      <Input
                        id="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={(e) => updateFormData("emergencyContact", e.target.value)}
                        placeholder="Parent/Guardian name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyPhone">Emergency Contact Number *</Label>
                      <Input
                        id="emergencyPhone"
                        type="tel"
                        value={formData.emergencyPhone}
                        onChange={(e) => updateFormData("emergencyPhone", e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Education */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Educational Background</h2>

                  <div className="space-y-2">
                    <Label>Current Educational Status *</Label>
                    <Select value={formData.educationStatus} onValueChange={(v) => updateFormData("educationStatus", v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your status" />
                      </SelectTrigger>
                      <SelectContent>
                        {educationStatuses.map((status) => (
                          <SelectItem key={status} value={status}>{status}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="university">University/Institution Name *</Label>
                      <Input
                        id="university"
                        value={formData.university}
                        onChange={(e) => updateFormData("university", e.target.value)}
                        placeholder="e.g., IIT Indore"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="program">Program/Degree Name *</Label>
                      <Input
                        id="program"
                        value={formData.program}
                        onChange={(e) => updateFormData("program", e.target.value)}
                        placeholder="e.g., B.Tech Computer Science"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialization">Academic Specialization/Major *</Label>
                    <Input
                      id="specialization"
                      value={formData.specialization}
                      onChange={(e) => updateFormData("specialization", e.target.value)}
                      placeholder="e.g., Urban Planning, Data Science, Public Policy"
                      required
                    />
                    <p className="text-xs text-muted-foreground">This helps us match you with the right department</p>
                  </div>
                </div>
              )}

              {/* Step 3: Interests */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Areas of Interest & Skills</h2>

                  <div className="space-y-2">
                    <Label>Select Primary Areas of Interest (Max 3) *</Label>
                    <p className="text-sm text-muted-foreground mb-3">
                      Selected: {formData.interests.length}/3
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {areasOfInterest.map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          className={`p-3 rounded-lg text-left text-sm transition-colors border ${
                            formData.interests.includes(interest)
                              ? "bg-primary/10 border-primary text-primary"
                              : "bg-card border-border hover:border-primary/50"
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="technicalSkills">Technical Skills *</Label>
                    <Textarea
                      id="technicalSkills"
                      value={formData.technicalSkills}
                      onChange={(e) => updateFormData("technicalSkills", e.target.value)}
                      placeholder="e.g., Python, Excel, Data Analysis, AutoCAD, Public Speaking..."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Relevant Experience</Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => updateFormData("experience", e.target.value)}
                      placeholder="Describe any relevant internships, projects, or volunteer work..."
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Statement */}
              {currentStep === 4 && (
                <div className="space-y-4 animate-fade-in">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Statement of Purpose</h2>

                  <div className="space-y-2">
                    <Label htmlFor="sop">Why do you want to join IWM? (Max 300 words) *</Label>
                    <Textarea
                      id="sop"
                      value={formData.sop}
                      onChange={(e) => updateFormData("sop", e.target.value)}
                      placeholder="Share your motivation, goals, and what you hope to contribute..."
                      className="min-h-[200px]"
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Words: {formData.sop.split(/\s+/).filter(Boolean).length}/300
                    </p>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted">
                    <Checkbox
                      id="availability"
                      checked={formData.availability}
                      onCheckedChange={(checked) => updateFormData("availability", checked)}
                    />
                    <div>
                      <Label htmlFor="availability" className="cursor-pointer">
                        Time Availability Confirmation *
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        I confirm that I can commit 40-45 days for the internship program and will be available for full-time engagement during this period.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                {currentStep < 4 ? (
                  <Button
                    type="button"
                    onClick={() => setCurrentStep((prev) => Math.min(4, prev + 1))}
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" variant="civic" disabled={!formData.availability}>
                    Submit Application
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already registered?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Sign in here
            </Link>
          </p>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Register;
