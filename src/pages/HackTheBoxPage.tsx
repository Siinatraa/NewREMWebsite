
import { Bug, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// Hack the Box write-ups page

export function HackTheBoxPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['easy']);
  const [expandedWriteups, setExpandedWriteups] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const toggleWriteup = (writeup: string) => {
    setExpandedWriteups(prev => 
      prev.includes(writeup) 
        ? prev.filter(w => w !== writeup)
        : [...prev, writeup]
    );
  };

  return (
    <div className="content-wrapper py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 mb-6">
            <Bug className="w-8 h-8 text-primary" />
          </div>
          <h1 className="glow-text mb-4">Hack the Box</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sherlock CTF write-ups and analysis documenting my journey through malware analysis challenges
          </p>
        </div>

        {/* Easy Difficulty Section */}
        <div className="tech-card mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <button
            onClick={() => toggleSection('easy')}
            className="w-full flex items-center justify-between text-left p-6 hover:bg-muted/30 transition-colors rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-md text-sm font-semibold">EASY</span>
              <h2 className="text-2xl font-bold">Easy Challenges</h2>
            </div>
            {expandedSections.includes('easy') ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>
          
          {expandedSections.includes('easy') && (
            <div className="px-6 pb-6">
              {/* Training Day Write-up */}
              <div className="mt-6 border border-border rounded-lg overflow-hidden mb-6">
                <button
                  onClick={() => toggleWriteup('training-day')}
                  className="w-full flex items-center justify-between text-left p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-primary">Training Day</h3>
                  {expandedWriteups.includes('training-day') ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
                
                {expandedWriteups.includes('training-day') && (
                  <div className="p-6 space-y-8 bg-card">
                    {/* Question 1 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 1</h4>
                      <p className="text-foreground/80">What is the sha256 hash for "arguement_baby_1.exe"?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary break-all">DC6267608DDFCC5C80571CCD46475A03FB667BAF8620D0E91C93CCACACF97EF6</p>
                      </div>
                      <p className="text-foreground/70 text-sm">You can do this multiple ways, I chose to put this in pestudio as it not only gives us the hash but also displays other information about the executable. It is the blue underlined text.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/KDYtfs9mDhJeXVRojXNBdp/image.png" alt="SHA256 hash in pestudio" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 2 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 2</h4>
                      <p className="text-foreground/80">Can you find development environment of malware author (e.g:ide)?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">Visual Studio</p>
                      </div>
                      <p className="text-foreground/70 text-sm">pestudio also shows what compiled it too! It highlighted below.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/h8Qist95Fvzw3kEqzUQJGG/image_(1).png" alt="Visual Studio compiler info" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 3 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 3</h4>
                      <p className="text-foreground/80">What CPU architecture was argument_baby_1.exe compiled for?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">32 Bit</p>
                      </div>
                      <p className="text-foreground/70 text-sm">While still in pestudio we can click on "indicators" and look for "File Type", in the highlighted area this shows us CPU Architecture which is 32 bit.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/CM9xDZhHCMNfyYvuXZviGj/image_(2).png" alt="CPU architecture" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 4 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 4</h4>
                      <p className="text-foreground/80">Is argument_baby_1.exe a symbol-stripped binary?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">False</p>
                      </div>
                      <p className="text-foreground/70 text-sm">Going to the "File Header" section in pestudio we see a property called "debug stripped", this will tell us if it was symbol stripped or not and in our case it comes back as false.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/R4p57xFiBvWGFXLLv2CVUW/image_(3).png" alt="Symbol stripped check" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 5 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 5</h4>
                      <p className="text-foreground/80">Retrieve the full PDB file path from the debug information of argument_baby_1.exe</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">C:\Users\HTB\Desktop\argument\Release\argument.pdb</p>
                      </div>
                      <p className="text-foreground/70 text-sm">We can find this by clicking at the root of the tree and see "debug &gt; file". This will tell us the full path to the PDB file for argument_baby_1.exe. A basic overview of a PDB file is its essentially used for debugging an executable that maps back the compiled machine code to the original source code.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/N3AVLdS3cQT8wyc6EnVmUt/image_(4).png" alt="PDB file path" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 6 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 6</h4>
                      <p className="text-foreground/80">The malware author was using a Windows OS. What was the associated username?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">HTB</p>
                      </div>
                      <p className="text-foreground/70 text-sm">This also relates to the screenshot above, the username in the file path is always after C:\Users\... and in our case it's HTB.</p>
                    </div>

                    {/* Question 7 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 7</h4>
                      <p className="text-foreground/80">What calling convention is used in argument_baby_1.exe?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">cdecl</p>
                      </div>
                      <p className="text-foreground/70 text-sm">I had to do a little research of what exactly a Calling Convention was but it's the sequence of how the assembly instructions are generated for functions. For example, when a function is called, the compiler generates code that pushes arguments onto the stack in a specific order which typically is right to left. With this I realized what it was talking about and loaded up Ghidra. I went to a random function and found it, you can find them on all functions. The screenshot encapsulates 3 different functions, the calling convention is highlighted.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/2XY82iA5xsajC6DWtYskp6/image_(5).png" alt="Calling convention" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 8 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 8</h4>
                      <p className="text-foreground/80">How is the 1st-5th argument passed to the function in argument_baby_1.exe?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary space-y-1">
                        <p className="font-mono text-sm text-primary">ESP</p>
                        <p className="font-mono text-sm text-primary">ESP+4</p>
                        <p className="font-mono text-sm text-primary">ESP+8</p>
                        <p className="font-mono text-sm text-primary">ESP+C</p>
                        <p className="font-mono text-sm text-primary">ESP+10</p>
                      </div>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/j36DsgCmXQLhVRPLWvwmwq/image_(6).png" alt="Entry point" className="rounded-lg border border-border w-full" />
                      <p className="text-foreground/70 text-sm">Now this question seems very vague and I had to piece some things together with trial and error. So with Ghidra opened, the "param_X" are arguments, we use this as our base in the first part of the question. Now we know how to identify arguments, where do we start? We start at the entry point of the executable, this is where the program actually starts execution. Even though it's not labeled as a param, ESP, is the 1st argument passed to the function. You push EBP to the stack and MOV ESP into EBP. ESP is our first argument passed to the function.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/AZSdb7WmzDstm4JvLqh4iS/image_(7).png" alt="Parameters" className="rounded-lg border border-border w-full" />
                      <p className="text-foreground/70 text-sm">Now this next part was a little confusing and spent a little while pulling out my hair. Looking at the Param_1 and Param_2 these are the 2nd and 3rd arguments passed. You see the Hex 0x4 and 0x8, these are our answers. You take ESP and 0x4, drop the 0x for a + and you have ESP+4. You do this for the other params by scrolling down until you see Param_3 and 4. (Scroll pass the other functions)</p>
                    </div>

                    {/* Question 9 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 9</h4>
                      <p className="text-foreground/80">Which CPU register holds the function's return value in argument_baby_1.exe?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">EAX</p>
                      </div>
                      <p className="text-foreground/70 text-sm">With the question being vague again, it took some trial and error but was able to get it figured out. MOV EAX, dword ptr [EBP + Param_1]</p>
                      <p className="text-foreground/70 text-sm">This is basically saying the value of whatever is at the memory address of [EBP + Param_1] is being moved into EAX. EAX is CPU register, therefore EAX is the CPU Register the returns the value. Typically the return value of a function is stored in EAX.</p>
                    </div>

                    {/* Question 10 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 10</h4>
                      <p className="text-foreground/80">What calling convention is used in argument_baby_2.exe?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">Fastcall</p>
                      </div>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/igwomC5jfri4XQyBtb7Ndp/image_(8).png" alt="Fastcall convention" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 11 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 11</h4>
                      <p className="text-foreground/80">How is the 1st-4th argument passed to the function in argument_baby_2.exe?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary space-y-1">
                        <p className="font-mono text-sm text-primary">ECX</p>
                        <p className="font-mono text-sm text-primary">EDX</p>
                        <p className="font-mono text-sm text-primary">ESP+4</p>
                        <p className="font-mono text-sm text-primary">ESP+8</p>
                      </div>
                      <p className="text-foreground/70 text-sm">To find the 1st Argument in a function you first start at the entry and find a function that has a lot of shit in it. For Baby 2 this is FUN_00401100. Since we know in Ghidra Param_X are arguments and the main function has a lot of shit in it near the entry point, the answers are looking right at us.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/QZ5h7z2XduFDfYcvb4Li6P/image_(9).png" alt="Baby 2 parameters" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 12 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 12</h4>
                      <p className="text-foreground/80">What CPU architecture was argument_baby_3.exe compiled for?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">64 bit</p>
                      </div>
                      <p className="text-foreground/70 text-sm">We put it in pestudio to get our answer.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/NjwhLhYPUxr5sgtshhRoiZ/image_(10).png" alt="64-bit architecture" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 13 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 13</h4>
                      <p className="text-foreground/80">How is the 1st-4th argument passed to the function in argument_baby_3.exe?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary space-y-1">
                        <p className="font-mono text-sm text-primary">RCX</p>
                        <p className="font-mono text-sm text-primary">RDX</p>
                        <p className="font-mono text-sm text-primary">R8</p>
                        <p className="font-mono text-sm text-primary">R9</p>
                      </div>
                      <p className="text-foreground/70 text-sm">Again find the main function near the entry with a lot of shit in it, this case is FUN_140001070.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/VT8Bju7M8qiizU67TWLxHe/image_(11).png" alt="Baby 3 parameters" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 14 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 14</h4>
                      <p className="text-foreground/80">In the case of argument_baby_3.exe, which CPU register stores the function's return value?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">RAX</p>
                      </div>
                      <p className="text-foreground/70 text-sm">It is stored in the RAX Register. Why? This is a x64 Bit Executable, when a function stores a return value it's always in the RAX Register. In x32 Bit Executables the return value is EAX Register.</p>
                    </div>

                    {/* Review Section */}
                    <div className="mt-8 p-6 bg-primary/10 border border-primary/30 rounded-lg">
                      <h4 className="text-xl font-bold text-primary mb-4">Review</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        It started off easy with a static analysis via pestudio but quickly destroyed any ego I had as soon as I loaded the first executable in Ghidra. Going through this it was incredibly difficult at first but I learned A LOT from this sherlock. As someone who's dabbled with Ghidra and Assembly it is still very confusing but I've been able to pick apart pieces one by one as time goes on. As I go further into my Reverse Engineering pathway it gets a little easier every time. Once I understood what the questions were asking and how to find the answers I feel like if I restarted I would be able to knock this out in like 10 - 15 minutes. To be honest I used the walkthrough for the first half until it clicked in my mind. Although I used the walkthrough and could have just copy and pasted the answers I'm here to learn, I wanted to understand the "Why" behind them. The walkthrough did a terrible job with helping explaining what was going on making multiple leaps in logic I originally did not understand.
                      </p>
                    </div>

                    {/* What I Learned Section */}
                    <div className="mt-6 p-6 bg-secondary/10 border border-secondary/30 rounded-lg">
                      <h4 className="text-xl font-bold text-secondary mb-4">What I Learned</h4>
                      <div className="space-y-4 text-foreground/80">
                        <p className="leading-relaxed">
                          I had several moments of "I just don't understand" to the "Aha!" moment where everything clicks.
                        </p>
                        
                        <div className="space-y-3">
                          <p className="font-semibold text-foreground">1. Finding Arguments in Ghidra</p>
                          <p className="leading-relaxed">
                            My first moment of this was as soon as I loaded the first executable in Ghidra, "How is the first Argument passed into the function" killed me. How do you find the first Argument? Is this in the first Function? How, How, HOW? I had so many questions and started banging my head against the wall. To be honest it wasn't until I got halfway through examining the second executable everything clicked. What made it click? I broke it down into several pieces when re-examining the first .exe answers to the second. So in Ghidra, Arguments are labeled as "params_X", this was my starting point. After doing some research on Arguments in Assembly I came across something along the lines of "To find the main function of an executable look near the entry point and for a lot of arguments (params_X) in a function." Now is this always true, probably not but for us it worked great. I simply went down each function after the entry point until I found one that had a lot of "params_X" on it. Since I already saw the answers I made the connection that [Stack:0x4] = ESP+4 param_2, [Stack:0x8] = ESP+8 param_3, etc… which were the 2nd, 3rd, etc… arguments passed into the function. With this clicking, I went to test my developing theory on the third executable's arguments and I was correct!
                          </p>
                        </div>

                        <div className="space-y-3">
                          <p className="font-semibold text-foreground">2. x32 vs x64 Return Values</p>
                          <p className="leading-relaxed">
                            One of the other major things I learned as well is the small but important difference in x64 and x32 executables and how they return values into a function. In x32 the return value of whatever the function is doing is stored into the EAX Register, in x64 bit executable this value is stored in the RAX Register. I didn't know this beforehand and something I will stick in the back of my mind for later.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Lockpick Write-up */}
              <div className="mt-6 border border-border rounded-lg overflow-hidden mb-6">
                <button
                  onClick={() => toggleWriteup('lockpick')}
                  className="w-full flex items-center justify-between text-left p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-primary">Lockpick</h3>
                  {expandedWriteups.includes('lockpick') ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
                
                {expandedWriteups.includes('lockpick') && (
                  <div className="p-6 space-y-8 bg-card">
                    {/* Question 1 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 1</h4>
                      <p className="text-foreground/80">Please confirm the encryption key string utilised for the encryption of the files provided?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">bhUlIshutrea98liOp</p>
                      </div>
                      <p className="text-foreground/70 text-sm">First thing I did was open the files I could in the zip to get an idea of what we're dealing with because it came with a lot of files. After getting a basic pre-analysis done I did find any useful strings so I put in Ghidra. How I found the encryption string was I went to the main function and figured it would be around there. Lucky enough they stuck right at the beginning for us to see.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/LpKwX7Rotsh7cLPdhzQTNj/image.png" alt="Encryption key in Ghidra" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 2 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 2</h4>
                      <p className="text-foreground/80">We have recently received an email from wbevansn1@cocolog-nifty.com demanding to know the first and last name we have him registered as. They believe they made a mistake in the application process. Please confirm the first and last name of this applicant.</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">Walden Bevans</p>
                      </div>
                      <p className="text-foreground/70 text-sm">I was very confused as to what this meant but after looking at the encrypted documents provided and the questions I realized I have to figured out how to Decrypt these. Let's go down this rabbit hole.</p>
                      <p className="text-foreground/70 text-sm">Using the great tools of the modern age I asked AI to create me a BES24 decryption, all you need is the encryption key and it takes care of it all for you. All now search the email provided and we get:</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/MkrwsR2sqKVzV2st6ww2wy/image_(1).png" alt="Decryption script" className="rounded-lg border border-border w-full" />
                      <img src="https://cdn-ai.onspace.ai/onspace/files/DVdwLqCatkzbCMPu7MFoMq/image_(2).png" alt="Search results" className="rounded-lg border border-border w-full mt-4" />
                    </div>

                    {/* Question 3 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 3</h4>
                      <p className="text-foreground/80">What is the email address of the attacker?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">bes24@protonmail.com</p>
                      </div>
                      <p className="text-foreground/70 text-sm">The email address of the hackers is pretty easy, just open up any of the note.txt files and you'll find it.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/d2JG3bxfn6pYofgPq3ej2Q/image_(3).png" alt="Attacker email" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 4 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 4</h4>
                      <p className="text-foreground/80">City of London Police have suspicions of some insider trading taking part within our trading organisation. Please confirm the email address of the person with the highest profit percentage in a single trade alongside the profit percentage (to 25 decimal places).</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary break-all">fmosedale17a@bizjournals.com, 142303.1996053929628411706675436</p>
                      </div>
                      <p className="text-foreground/70 text-sm">Thank goodness for AI as I was not gonna parse the giant JSON file and do mathematical calculations, I had it write a script for me so I could extract the name, email, and their percentage.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/KcbntbQZntprbKzCNqJA8E/image_(4).png" alt="Highest profit trader" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 5 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 5</h4>
                      <p className="text-foreground/80">What is the MAC address and serial number of the laptop assigned to Hart Manifould?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">E8-16-DF-E7-52-48, 1316262</p>
                      </div>
                      <p className="text-foreground/70 text-sm">With the decrypted files we search for Hart Manifould and find his MAC and Serial Number.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/PeZKz363X2oCEfLaJaMLgc/image_(5).png" alt="Hart Manifould MAC and Serial" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 6 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 6</h4>
                      <p className="text-foreground/80">Our E-Discovery team would like to confirm the IP address detailed in the Sales Forecast log for a user who is suspected of sharing their account with a colleague. Please confirm the IP address for Karylin O'Hederscoll.</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">8.254.104.208</p>
                      </div>
                      <p className="text-foreground/70 text-sm">Search Hederscoll in the Sales Forecast and we find our answer.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/isDrQ4YiGTomx6V7xi3gUf/image_(6).png" alt="IP address search" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 7 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 7</h4>
                      <p className="text-foreground/80">Which of the following file extensions is not targeted by the malware? .txt, .sql, .ppt, .pdf, .docx, .xlsx, .csv, .json, .xml</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">.ppt</p>
                      </div>
                      <p className="text-foreground/70 text-sm">Looking at the code in Ghidra we can see what file types are targeted and it's pretty easy to see that .ppt was not harvested.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/FLrKEsjJnmtjHuGATX2giW/image_(7).png" alt="File extensions in code" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 8 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 8</h4>
                      <p className="text-foreground/80">We need to confirm the integrity of the files once decrypted. Please confirm the MD5 hash of the applicants DB.</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">F3894AF4F1FFA42B3A379DDDBA384405</p>
                      </div>
                      <p className="text-foreground/70 text-sm">There are multiple ways to grab a hash of a file. I'm running FlareVM so I was able to left click and select MD5 Hash from the provided menu.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/dD6L6EVLD7WMudD9mkYWgL/Applicants_DB_hash.png" alt="Applicants DB hash" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 9 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 9</h4>
                      <p className="text-foreground/80">We need to confirm the integrity of the files once decrypted. Please confirm the MD5 hash of the trading backup.</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">87BAA3A12068C471C3320B7F41235669</p>
                      </div>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/YZNpDttycfc3JbfXxDYQHT/Trading_Backup_Hash.png" alt="Trading backup hash" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 10 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 10</h4>
                      <p className="text-foreground/80">We need to confirm the integrity of the files once decrypted. Please confirm the MD5 hash of the complaints file.</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">C3F05980D9BD945446F8A21BAFDBF4E7</p>
                      </div>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/N9Jtpv9ge6WHm4mNVnq7N3/Complaints_File_Hash.png" alt="Complaints file hash" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Review Section */}
                    <div className="mt-8 p-6 bg-primary/10 border border-primary/30 rounded-lg">
                      <h4 className="text-xl font-bold text-primary mb-4">Review</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        I would honestly say this was pretty easy, the first question I was worried it was gonna be a "mislabeled room" (What I call a room that doesn't match its difficulty) but it turned out okay. I've been working a lot with Ghidra and I'm glad I was able to lock onto the first answer pretty quickly.
                      </p>
                    </div>

                    {/* What I Learned Section */}
                    <div className="mt-6 p-6 bg-secondary/10 border border-secondary/30 rounded-lg">
                      <h4 className="text-xl font-bold text-secondary mb-4">What I Learned</h4>
                      <div className="space-y-4 text-foreground/80">
                        <div className="space-y-3">
                          <p className="font-semibold text-foreground">1. Decrypting Basic Ransomware</p>
                          <p className="leading-relaxed">
                            One thing I can take away from this is now I know how to decrypt *very basic* ransomware with Python which is pretty cool even though AI carried me through the scripting part. At first I wasn't sure this was gonna be the right way to go about the Q&A as I thought this was more of an advanced technique but it was just at the right level to figure everything else.
                          </p>
                        </div>

                        <div className="space-y-3">
                          <p className="font-semibold text-foreground">2. ELF File Structure</p>
                          <p className="leading-relaxed">
                            Another thing I learned is how .elf looks/structure in Ghidra and what makes them up in Disassembly as up until this point I've only messed with Windows Executables. Made a good practice and skill sharpening exercise!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Heartbreaker Continuum Write-up */}
              <div className="mt-6 border border-border rounded-lg overflow-hidden mb-6">
                <button
                  onClick={() => toggleWriteup('heartbreaker-continuum')}
                  className="w-full flex items-center justify-between text-left p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-primary">Heartbreaker Continuum</h3>
                  {expandedWriteups.includes('heartbreaker-continuum') ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
                
                {expandedWriteups.includes('heartbreaker-continuum') && (
                  <div className="p-6 space-y-8 bg-card">
                    {/* Question 1 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 1</h4>
                      <p className="text-foreground/80">To accurately reference and identify the suspicious binary, please provide its SHA256 hash.</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary break-all">12DAA34111BB54B3DCBAD42305663E44E7E6C3842F015CCCBBE6564D9DFD3EA3</p>
                      </div>
                      <p className="text-foreground/70 text-sm">There are multiple ways to get hashes for files, but the option I took was putting the executable in PeStudio. This gives us more than just the hash to look at.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/gS5KfmiEPVpELGPWQ2Hf4f/image.png" alt="SHA256 hash in PeStudio" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 2 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 2</h4>
                      <p className="text-foreground/80">When was the binary file originally created, according to its metadata (UTC)?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">2024-03-13 10:38:06</p>
                      </div>
                      <p className="text-foreground/70 text-sm">Again, while still in PeStudio, if we look right under where we found the hash, we find the creation time in UTC.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/gwLDPAFs8m4iEi3aNqf6sy/image_(1).png" alt="Binary creation time" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 3 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 3</h4>
                      <p className="text-foreground/80">Examining the code size in a binary file can give indications about its functionality. Could you specify the byte size of the code in this binary?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">38400</p>
                      </div>
                      <p className="text-foreground/70 text-sm">If we go to Sections in PeStudio we see 3 different sections: .text, .rsrc, and .reloc. The first one is the only section that holds the code, and in this view, we can see the size in bytes.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/cEz2cLH5DGTBoS7qafLcoM/image_(2).png" alt="Code section size" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 4 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 4</h4>
                      <p className="text-foreground/80">It appears that the binary may have undergone a file conversion process. Could you determine its original filename?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">newILY.ps1</p>
                      </div>
                      <p className="text-foreground/70 text-sm">We can see the original name by clicking on the root of the tree and seeing a section called "Original-File-Name," but unfortunately this is wrong. It honestly was confusing me at first, but I realized they're still talking about the .text section from the last question that holds the executable code. Since it was converted, we don't see the true original name there. To find that, we can go to "Resources," and at the top, we see the name with the .text.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/63pCum2bHDAcrbxAEps8Nw/image_(3).png" alt="Original filename in resources" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 5 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 5</h4>
                      <p className="text-foreground/80">Specify the hexadecimal offset where the obfuscated code of the identified original file begins in the binary.</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">2C74</p>
                      </div>
                      <p className="text-foreground/70 text-sm">The first thought was to check the strings, and PeStudio conveniently has a section for this so we don't have to run strings via the terminal. Scrolling down I noticed something that looked like obfuscated code similar to Base64. When I saw the byte size I was confident this was the answer; right next to the byte size it shows the offset.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/ZXRY8rCyCm7srEH3xy9BjH/image_(4).png" alt="Obfuscated code offset" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 6 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 6</h4>
                      <p className="text-foreground/80">The threat actor concealed the plaintext script within the binary. Can you provide the encoding method used for this obfuscation?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">Base64</p>
                      </div>
                      <p className="text-foreground/70 text-sm">Going off of the above, I copied the entire value of it and pasted it into Notepad just to view everything. As I suspected from the last question it seems to be Base64; a giveaway is the "==" in the string, which is used as padding. Note: Something of interest is that this string is backwards. I noticed it earlier when I first saw it. When I pasted it into Notepad it confirmed my suspicion; I highlighted the reversing as well as the answer in the picture.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/hdELLNYH5YyZJJjYbL2HR3/image_(5).png" alt="Base64 encoding" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 7 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 7</h4>
                      <p className="text-foreground/80">What is the specific cmdlet utilized that was used to initiate file downloads?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">Invoke-WebRequest</p>
                      </div>
                      <p className="text-foreground/70 text-sm">So I figured I would decode this using CyberChef. The recipe used was Reverse (to reverse the string) and From Base64 (to decode it). We get a pretty nasty PowerShell script with multiple IOCs and the cmdlet used to download.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/eYr6MTX4yiE8NyajRV2gKQ/image_(6).png" alt="CyberChef decoding" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 8 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 8</h4>
                      <p className="text-foreground/80">Could you identify any possible network-related Indicators of Compromise (IoCs) after examining the code? Separate IPs by comma and in ascending order.</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">35.169.66.138</p>
                      </div>
                      <p className="text-foreground/70 text-sm">So we see the first IP IOC in the screenshot above, but there are two! Scrolling down we find another IP that connects the malware to an SFTP server.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/grWCdqFHNTfRrFs6QxaUyv/image_(7).png" alt="IP IOC in script" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 9 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 9</h4>
                      <p className="text-foreground/80">The binary created a staging directory. Can you specify the location of this directory where the harvested files are stored?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">C:\Users\Public\Public Files</p>
                      </div>
                      <p className="text-foreground/70 text-sm">I wouldn't say it's immediately evident where the output goes, but the $targetDir variable caught my eye. I followed the script and determined this was the output location for all the enumeration it is doing.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/Qz3pz5qi9qqPk4cNVmDGcy/image_(8).png" alt="Target directory" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 10 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 10</h4>
                      <p className="text-foreground/80">What MITRE ID corresponds to the technique used by the malicious binary to autonomously gather data?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">T1119</p>
                      </div>
                      <p className="text-foreground/70 text-sm">A simple Google search for "MITRE Automated Collection" and we came back with the technique ID.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/QWSknJVSZnycSKCKZNKykB/image_(9).png" alt="MITRE technique" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 11 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 11</h4>
                      <p className="text-foreground/80">What is the password utilized to exfiltrate the collected files through the file transfer program within the binary?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">M8&C!i6KkmGL1-#</p>
                      </div>
                      <p className="text-foreground/70 text-sm">Going through the script we see credentials to the SFTP server in the format of Username:Password@SFTP_IP.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/S6Ps2WELxM7vEXUFQHaQrr/image_(10).png" alt="SFTP credentials" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Bonus Section */}
                    <div className="mt-8 p-6 bg-accent/10 border border-accent/30 rounded-lg">
                      <h4 className="text-xl font-bold text-accent mb-4">Bonus</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        After finishing it I went back and wanted to figure out exactly what this script did. Rereading it slowly it seems to be a basic info stealer worm that uses phishing emails via Outlook to propagate. The email sent seems to be a "Love Confession" and obfuscates the executable directly in the email by hyperlinking.
                      </p>
                    </div>

                    {/* Review Section */}
                    <div className="mt-8 p-6 bg-primary/10 border border-primary/30 rounded-lg">
                      <h4 className="text-xl font-bold text-primary mb-4">Review</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        I think this one was pretty easy; it was not difficult at all. Everything seemed pretty straightforward, but the only hiccup I had was finding the original name. That needed a little thinking to figure out what it meant because I originally thought the file name, not the PowerShell script embedded in .text name.
                      </p>
                    </div>

                    {/* What I Learned Section */}
                    <div className="mt-6 p-6 bg-secondary/10 border border-secondary/30 rounded-lg">
                      <h4 className="text-xl font-bold text-secondary mb-4">What I Learned</h4>
                      <div className="space-y-4 text-foreground/80">
                        <p className="leading-relaxed">
                          Although I was able to go through it pretty smoothly, the original name stumped me for a little bit. I didn't know I could see the name of embedded executables in the different sections of the file by going to the Resource Tab.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* OpSalwarKameez24-1: Super Start Write-up */}
              <div className="mt-6 border border-border rounded-lg overflow-hidden mb-6">
                <button
                  onClick={() => toggleWriteup('opsalwarkameez')}
                  className="w-full flex items-center justify-between text-left p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-primary">OpSalwarKameez24-1: Super Start</h3>
                  {expandedWriteups.includes('opsalwarkameez') ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
                
                {expandedWriteups.includes('opsalwarkameez') && (
                  <div className="p-6 space-y-8 bg-card">
                    {/* Question 1 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 1</h4>
                      <p className="text-foreground/80">What is the process name of malicious NodeJS application?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">Coupon.exe</p>
                      </div>
                      <p className="text-foreground/70 text-sm">So my first thought with the question is to actually detonate the malware. I will set up several way to monitor what is going on in the background. I have my Workstation connected to my REMux machine with Inetsim, FakeDNS, and Wireshark. On my Workstation I will use Regshot, Process Hacker, Process Monitor, and ProcDOT.</p>
                      <p className="text-foreground/70 text-sm">I could have just did Process Monitor but I wanted to get more information as I feel like it would be useful later on in Sherlock. Viewing Process Monitor after executing Electron-Coupons.exe we see it make a child process, this is our answer.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/YeRKeEVtSzacYL5dzxzARo/image_(11).png" alt="Process Monitor showing Coupon.exe" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 2 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 2</h4>
                      <p className="text-foreground/80">Which option has the attacker enabled in the script to run the malicious Node.js application?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">nodeIntegration</p>
                      </div>
                      <p className="text-foreground/70 text-sm">This was one of the last question I answered because I wasn't too sure what this meant. After googling for a bit I found something called NodeIntegration. This is apart of the Electron Application that allows you to create a process and run the executable, in our case its Coupon.exe, which after further analysis seems to be malicious. Going back to our string output from app.asar I did ctrl + F and was able to confirm nodeIntegration was enabled.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/SDAZkGJdceL7XFygCDVeTQ/image_(12).png" alt="NodeIntegration enabled" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 3 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 3</h4>
                      <p className="text-foreground/80">What protocol and port number is the attacker using to transmit the victim's keystrokes?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">WebSocket, 44500</p>
                      </div>
                      <p className="text-foreground/70 text-sm">So when we unzipped the file it came with a pcap, I figured the answer would be here. Initially scrolling through the pcap there's a lot of noise going on with a bunch of different protocols going on. To filter out some of this I went to Statistics→Protocol Hierarchy to get a overview of the different protocols used. WebSocket caught my eye as unusual and decided to start there and filtered for it. This was our answer! Looking at in the bottom plane we see the strokes recorded.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/3vWHLzfAvu6cW2TH6xuHf6/image_(13).png" alt="WebSocket keystrokes" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 4 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 4</h4>
                      <p className="text-foreground/80">What XOR key is the attacker using to decode the encoded shellcode?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">ec1ee034ec1ee034</p>
                      </div>
                      <p className="text-foreground/70 text-sm">Since we locked onto the malicious IP in the last question, 15.206.13.31, I filtered for this in the pcap using the query "ip.addr == 15.206.13.31". I scrolled to the top to see the first interactions with the Malicious IP and noticed a GET Request so I decided to follow the stream. In the stream we find a string that looks oddly similar to a key.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/XL6Voihu2iMYpMBzq5Co7T/image_(14).png" alt="XOR key" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 5 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 5</h4>
                      <p className="text-foreground/80">What is the IP address, port number and process name encoded in the attacker payload?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">15.206.13.31, 4444, cmd.exe</p>
                      </div>
                      <p className="text-foreground/70 text-sm">This took me a while to find as I am very unfamiliar with JavaScript Malware and REM in general but I was able to get it. Doing some research I found that this executable is NSIS Installer, apparently these can be treated as archives. Using the 7zip utility I was able to open the archive. Now with these the main file you are after is the "app.asar" file. This will give you the source code of the executable. Using 7zip I was able to navigate to the correct location and extract all the content from the file with the strings command, this gave me to source code to Coupon.exe! Now this next part took me a little bit to figure out as I found several IP's (this was the local machines IP and 0.0.0.0) with ports and processes near them. I thought these were the answer as I thought it was the payload but no. After scrolling A LOT as this file was massive I found a hex encoded string and a base64 encoded string. I decided on the base64 first and put it in cyber chef but it was just garble. Then I remembered we had the XOR Key from the last question. I added the XOR to the cyberchef recipe and was able to decoded the string and found the answer!</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/LZiKgo9yNFcNdLMNCYXCjg/image_(15).png" alt="Payload decoding" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 6 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 6</h4>
                      <p className="text-foreground/80">What are the two commands the attacker executed after gaining the reverse shell?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary space-y-1">
                        <p className="font-mono text-sm text-primary">whoami</p>
                        <p className="font-mono text-sm text-primary">ipconfig</p>
                      </div>
                      <p className="text-foreground/70 text-sm">Since this is a reverse shell but no commands were hard coded to execute after it connects I was curious if we could see them in the pcap from earlier since we know the local machine made a connection to the malicious IP. Going into wireshark and search for port 4444, "tcp.port == 4444", we can see the commands ran by analyzing the TCP Stream.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/hX2BM88VrVgSdKcoA7UiW2/image_(16).png" alt="Reverse shell commands" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 7 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 7</h4>
                      <p className="text-foreground/80">Which Node.js module and its associated function is the attacker using to execute the shellcode within V8 Virtual Machine contexts?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">vm, runInNewContext</p>
                      </div>
                      <p className="text-foreground/70 text-sm">Again being unfamiliar with Javascript Malware I did a simple google search for Node.js modules used for VM's and looked through some of the documentation. This is where I found the first part of this answer. To find the second part of the question I searched through the string output file for what I found in the documentation.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/oSMXociMrfV88nULmHSsvu/image_(17).png" alt="VM documentation" className="rounded-lg border border-border w-full" />
                      <p className="text-foreground/70 text-sm">Above we see several strings I can search but more specifically the "script.runInNewContext", this allows you to run code in the new VM instance. Searching this in the Output we see right under our Base64 encoded Reverse Shell!</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/AHYicSdcVLT23o9SvoCSzK/image_(18).png" alt="runInNewContext in code" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 8 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 8</h4>
                      <p className="text-foreground/80">Decompile the bytecode file included in the package and identify the Win32 API used to execute the shellcode.</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">CreateThread</p>
                      </div>
                      <p className="text-foreground/70 text-sm">Again had to do a little research into this. So in Node.js there is a file with a ".jsc" extension, this is our Bytecode or what Node.js calls ByteNode file.</p>
                      <p className="text-foreground/70 text-sm">Sidenote: We cannot find this via our Strings output so I had to install "npm install -g @electron/asar" which allows us to actually extract all the files in the NSIS file.</p>
                      <p className="text-foreground/70 text-sm">Okay so now that we installed the above tool and can actually parse the archive, going through this we found our .jsc file which is called "script.jsc". I opened it up in the HxD to get an overview of it but nothing too much. Since it's asking for the specific Win32 API used to execute shellcode I ran Floss (or you can do strings, either or) and came back with strings found in the file. There were very few APIs so it was pretty easy to choose the right answer. The CreateThread API creates a separate thread for execution within the virtual address space allocated to it. Since it allows execution we can safely assume this the API that executed the shellcode.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/NT6aDsYkkmAKXqiv6N3EWF/image_(19).png" alt="CreateThread API" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 9 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 9</h4>
                      <p className="text-foreground/80">Submit the fake discount coupon that the attacker intended to present to the victim.</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">Coupon1337</p>
                      </div>
                      <p className="text-foreground/70 text-sm">This was a little tricky to find and ended up looking up a walkthrough after several hours of attempting to find this. We need to use a specific decompiler for JSC files called View8, what this tool does is attempts to reconstruct the logic of the jsc file allowing us to pier more into the decompiled text. Looking through you'll find a large section containing a bunch of text in decimal format. Taking this and converting it via Cyberchef you find the answer.</p>
                    </div>

                    {/* Review Section */}
                    <div className="mt-8 p-6 bg-primary/10 border border-primary/30 rounded-lg">
                      <h4 className="text-xl font-bold text-primary mb-4">Review</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        This was something I really enjoyed doing and learned several new things about NSIS Files and Node.js in general. Going through it I had to use some of my critical thinking skills and pull on my own knowledge and experience but for the vast part of this I had to do a lot of research into this. I didn't feel like this was too exceptionally hard or too easy either and was a great middle ground to test my knowledge and thinking skills.
                      </p>
                    </div>

                    {/* What I Learned Section */}
                    <div className="mt-6 p-6 bg-secondary/10 border border-secondary/30 rounded-lg">
                      <h4 className="text-xl font-bold text-secondary mb-4">What I Learned</h4>
                      <div className="space-y-4 text-foreground/80">
                        <p className="leading-relaxed">
                          This was a great learning experience in learning Node.js, NSIS File format, and some new Tools to add.
                        </p>
                        
                        <div className="space-y-3">
                          <p className="font-semibold text-foreground">1. Node.js Understanding</p>
                          <p className="leading-relaxed">
                            For Node.js it was a good exercise to learn parts of node.js and how it works, doing a lot of researching and parsing documentation really helped solidify some of that information in my brain. Also notably what is and how to check for "nodeIntegration" which seems pretty important when examining malware like this. For later on down the line if I need to know certain things when examining malware similar to this I can refer back to this or to the documentation I've linked throughout this write up.
                          </p>
                        </div>

                        <div className="space-y-3">
                          <p className="font-semibold text-foreground">2. NSIS File Format</p>
                          <p className="leading-relaxed">
                            With the NSIS file format this was really interesting to me as the main executable acts like a zip file but isn't one at the same time. I now know I can access the archive via 7zip and can pull the app.asar which seems to be the most important part of this as it gives incredibly useful information.
                          </p>
                        </div>

                        <div className="space-y-3">
                          <p className="font-semibold text-foreground">3. New Tools</p>
                          <p className="leading-relaxed">
                            I tried to keep it simple with the tools I already knew but it wasn't enough for this, I played around with some other utilities and tools inside FlareVM but also View8 to decompile the JSC file. Really cool new tool to add to my workbench.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Medium Difficulty Section */}
        <div className="tech-card mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <button
            onClick={() => toggleSection('medium')}
            className="w-full flex items-center justify-between text-left p-6 hover:bg-muted/30 transition-colors rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-md text-sm font-semibold">MEDIUM</span>
              <h2 className="text-2xl font-bold">Medium Challenges</h2>
            </div>
            {expandedSections.includes('medium') ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>
          
          {expandedSections.includes('medium') && (
            <div className="px-6 pb-6">
              <p className="text-muted-foreground text-center py-8">Medium difficulty write-ups coming soon...</p>
            </div>
          )}
        </div>

        {/* Hard Difficulty Section */}
        <div className="tech-card mb-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <button
            onClick={() => toggleSection('hard')}
            className="w-full flex items-center justify-between text-left p-6 hover:bg-muted/30 transition-colors rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-md text-sm font-semibold">HARD</span>
              <h2 className="text-2xl font-bold">Hard Challenges</h2>
            </div>
            {expandedSections.includes('hard') ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>
          
          {expandedSections.includes('hard') && (
            <div className="px-6 pb-6">
              <p className="text-muted-foreground text-center py-8">Hard difficulty write-ups coming soon...</p>
            </div>
          )}
        </div>

        {/* Insane Difficulty Section */}
        <div className="tech-card mb-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <button
            onClick={() => toggleSection('insane')}
            className="w-full flex items-center justify-between text-left p-6 hover:bg-muted/30 transition-colors rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-md text-sm font-semibold">INSANE</span>
              <h2 className="text-2xl font-bold">Insane Challenges</h2>
            </div>
            {expandedSections.includes('insane') ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>
          
          {expandedSections.includes('insane') && (
            <div className="px-6 pb-6">
              <p className="text-muted-foreground text-center py-8">Insane difficulty write-ups coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
